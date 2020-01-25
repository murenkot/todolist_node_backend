const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoSchema = mongoose.Schema({
    name: String,
    done: {
        type: Boolean,
        default: false,
    },
    timeStamp: {
        type: Date,
        default: Date.now,
    },
})

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;