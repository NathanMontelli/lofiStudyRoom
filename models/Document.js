const { Schema, model } = require('mongoose')

const Documents = new Schema ({
  _id: String,
  data: Object
})

module.exports = model('documents', Documents)