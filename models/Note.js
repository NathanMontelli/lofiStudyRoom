const { Schema, model } = require('mongoose')

const Note = new Schema({
  title: {
    type: String,
    required: true,
    maxlength: 11,
    minlength: 1
  },
  body: {
    type: String,
    required: true,
    maxlength: 280,
    minlength: 1
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, { timestamps: true })

module.exports = model('note', Note)