let express = require('express')
let bodyParser = require('body-parser')
let server = express()

server.use(express.static(__dirname + "/public"))
server.use(bodyParser.json());

// CRUD APPLICATION
let todos = [];

function addTodo(todo){
  todos.push(todo);
}

function removeTodo(index){
  todos.splice(index, 1);
}

function updatedTodo(index, newTodo){
  if(index < todos.length){
    todos[index] = newTodo
    return {message: 'Successfully edited todo'}
  }
  return {error: 'Out of bounds try again.'}
}


server.get('/todos', function(req, res){
  res.send(todos);
})

server.post('/todos/new', function(req, res){
  addTodo(req.body.todo)
  res.send({message: 'Successfully added a todo'})
})

server.delete('/todos/:index', function(req, res){
  removeTodo(req.params.index)
  res.send({message: 'Successfully removed todo'})
})

server.put('/todos/:index', function(req, res){
  res.send(
    updatedTodo(req.params.index, req.body.todo)
  )
})


server.listen(8080, function(){
  console.log("The server is running on port 8080")
})