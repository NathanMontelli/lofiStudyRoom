const { Schema, model } = require('mongoose')

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  // songs: [{
  //   type: Schema.Types.ObjectId,
  //   ref: 'Song'
  // }]
}, { timestamps: true })

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
