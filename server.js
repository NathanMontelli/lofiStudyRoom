require('dotenv').config()

const express = require('express')
const { join } = require('path')
const passport = require('passport')
const { Strategy: LocalStrategy } = require('passport-local')
const { Strategy: JWTStrategy, ExtractJwt } = require('passport-jwt')

const mongoose = require('mongoose')
const Document = require('./models/Document.js')

const app = express()
const { User } = require('./models')

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())

passport.use(new JWTStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}, ({ id }, cb) => User.findById(id)
  .populate('songs')
  .then(user => cb(null, user))
  .catch(err => cb(err))))

app.use(require('./routes'))

app.get('*', (req, res) => res.sendFile(join(__dirname, 'client', 'build', 'index.html')))

require('./db')
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(err => console.log(err))


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/lofinotes');

const io = require("socket.io")(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
})

const defaultValue = ''

// listening for text changes
io.on('connection', socket => {
  socket.on('get-document', documentId => {
    // capturing function to find document by Id
    const document = findOrCreateDocument(documentId)
    // putting socket into a 'room' based on documentId and everyone with this socket can talk to one another
    socket.join(documentId)
    // send out data from matching document
    socket.emit('load-document', document.data)

    socket.on('send-changes', delta => {
      // broadcasts to everyone but 'us' that there are changes and 'delta' are those changes
      socket.broadcast.to(documentId).emit('receive-changes', delta)
    })
    // updating saved data on documents
    socket.on('save-document', async data => {
      Document.findByIdAndUpdate(documentId, { data })
    })
  })
})

function findOrCreateDocument(id) {
  if (id == null) return

  const document = Document.findById(id)
  if (document) return document
  return Document.create({ _id: id, data: defaultValue })
}
