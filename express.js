var express = require('express');
var app = express();

//default endpoint
app.get('/', (req, res) => {
    res.send('Welcome to Atoss World');
})

app.listen(3000,() => {
    console.log("server is working");
});

