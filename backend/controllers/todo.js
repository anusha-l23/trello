const Todo = require("../models/todo");
exports.getAllTodo = (req, res) => {
  Todo.find()
    .then((todo) => res.status(200).json(todo))
    .catch((err) =>
      res.status(404).json({ message: "Todos not found", error: err.message })
    );
};

exports.createTodo = (req, res) => {
  Todo.create(req.body)
    .then((data) =>
      res.status(200).json({ message: "Todo created successfully", data })
    )
    .catch((err) =>
      res.status(404).json({ message: "todo not created", error: err.message })
    );
};

exports.updateTodo = (req, res) => {
  Todo.findByIdAndUpdate(req.params.id, req.body)
    .then((data) =>
      res.status(200).json({ message: "Todo updated successfully", data })
    )
    .catch((err) =>
      res.status(404).json({ message: "todo not updated", error: err.message })
    );
};

exports.deleteTodo = (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then((data) =>
      res.status(200).json({ message: "Todo deleted successfully" })
    )
    .catch((err) =>
      res.status(404).json({ message: "todo not deleted", error: err.message })
    );
};
