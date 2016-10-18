let express = require('express')
let bodyParser = require('body-parser')
let todos = require('./server-assets/models/todo')
let server = express()

server.use(express.static(__dirname + "/public"))
server.use(bodyParser.json());

server.use(todos.routes);


server.listen(8080, function(){
  console.log("The server is running on port 8080")
})