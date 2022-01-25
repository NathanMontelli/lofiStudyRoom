const { Schema, model } = require('mongoose')

const User = new Schema({
  name: String,
  email: String,
  songs: [{
    type: Schema.Types.ObjectId,
    ref: 'Song'
  }]
}, { timestamps: true })

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
