const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    card: {
        type: String,
        required: true
    }
}, {collection: "cards"});

const Todo = mongoose.model("todo", todoSchema);
module.exports = Todo;