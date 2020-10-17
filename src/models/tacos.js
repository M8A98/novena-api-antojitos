// tacos

const mongoose = require('mongoose')

const tacoSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 20
  },
  precio: {
    type: Number,
    required: true,
    min: 0
  },
  isChido: {
    type: Boolean,
    required: false,
    default: true
  }
})

module.exports = mongoose.model('tacos', tacoSchema)
