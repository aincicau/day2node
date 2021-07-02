var express = require('express');
var app = express();

var mathmodule = require('./mathmodule.js');

//default endpoint
app.get('/', (req, res) => {
    res.send('Welcome to Atoss World');
});

app.get('/ex1', (req, res) => {
    res.send('you entered "ex1" ');
});

app.get('/ex2', (req, res) => {
    res.send(mathmodule.add(12,3).toString());
});

app.listen(3000,() => {
    console.log("server is working");
});

