var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ToDoSchema = new Schema({
    userId: Number,
    id: Number,
    title: String,
    completed: {type:Boolean, default: false},
});

module.exports = mongoose.model('ToDo', ToDoSchema);