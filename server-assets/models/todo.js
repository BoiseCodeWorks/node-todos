let routes = require('express').Router();

let todos = [];

function addTodo(todo) {
  todos.push(todo);
}

function removeTodo(index) {
  todos.splice(index, 1);
}

function updatedTodo(index, newTodo) {
  if (index < todos.length) {
    todos[index] = newTodo
    return { message: 'Successfully edited todo' }
  }
  return { error: 'Out of bounds try again.' }
}

routes.route('/todos/:index?')
  .get(function (req, res) {
    res.send(todos);
  })
  .post(function (req, res) {
    addTodo(req.body.todo)
    res.send({ message: 'Successfully added a todo' })
  })
  .put(function (req, res) {
    res.send(
      updatedTodo(req.params.index, req.body.todo)
    )
  })
  .delete(function (req, res) {
    removeTodo(req.params.index)
    res.send({ message: 'Successfully removed todo' })
  })


module.exports = {
  routes
}

