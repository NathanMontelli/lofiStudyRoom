// const router = require('express').Router()
// const { Notes } = require('../models')
// const passport = require('passport')
// const jwt = require('jsonwebtoken')
// const { response } = require('express')

// router.post('/', (req, res) => {
//   const { username, body } = req.body
//   Notes.create(new Notes({ username, body }), err => {
//     if (err) {
//       console.log(err)
//       res.sendStatus(400)
//     } else {
//       res.sendStatus(200)
//     }
//   })
// })

// router.get('/', (req, res) => {
//   Notes.find()
//   .then((notes)=>{
//     res.json(notes)
//   }).catch((err)=>{
//     res.status(500).json(err)
//   })
// })

// router.post('/users/profile', (req, res) => {
//   User.authenticate()(req.body.username, req.body.password, (err, user) => {
//     if (err) { console.log(err) }
//     res.json(user ? jwt.sign({ id: user._id }, process.env.SECRET) : null)
//   })
// })

// router.get('/users', passport.authenticate('jwt'), (req, res) => {
//   res.json(req.user)
// })

// module.exports = router
