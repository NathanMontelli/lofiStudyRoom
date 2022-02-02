const { Schema, model } = require('mongoose')

const User = new Schema({
  name: {
    type: String,
    unique: false,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  username: {
    type: String,
    unique: true,
    required: true,
    match: [/^(?=[a-zA-Z0-9._]{3,20}$)(?!.*[_.]{2})[^_.].*[^_.]$/,'Please fill a valid username']
  },
  // peters changes 
  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'note'
  }], 



}, { timestamps: true })

User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)
