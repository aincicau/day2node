const { fstat } = require('fs');
var http = require('http');

var fs = require('fs');

var ourmodule = require('./ourmodule.js');

var server = http.createServer((req, res) => {
   res.end('Welcome to Atoss World');
});

server.listen(3000);

console.log(ourmodule.ourFunction());
fs.readFile('dummy.txt', 'utf-8', (err,data) => {
    if(err){
        console.log('error reading file');
    }else{
        console.log(data)
    }
});