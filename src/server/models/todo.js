const mongoose = require('mongoose');

let itemSchema = mongoose.Schema({
    title: {type: String, unique: false, required: true},
    text: {type: String, unique: false, required: true},
    date: {type: Date, unique: false, required: true},
    done: {type: Boolean, unique: false, required: true}
  })
  
const TodoItem = mongoose.model('TodoItem', itemSchema)

module.exports = TodoItem