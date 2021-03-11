const express = require('express');

// Create our express app
const app = express();

const todoDb = require('./data/todo-db');

app.set('view engine', 'ejs');

// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
    res.redirect('/home');
});

app.get('/home', function(req, res) {
  res.render('home')
})

app.get('/todos', function(req, res) {
    res.render('todos/index', {
     todos: todoDb.getAll()
    });
  });

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});