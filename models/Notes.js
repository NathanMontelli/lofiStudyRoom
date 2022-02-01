const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../Utils/dateFormater');

const noteSchema = new Schema(
  {
    noteText: {
      type: String,
      required: 'You need to leave a note!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
    notes: {
      type: String,
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

const userNotes = model('Notes', noteSchema);

module.exports = userNotes;