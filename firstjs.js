const { fstat } = require('fs');
var http = require('http');

var fs = require('fs');

var ourmodule = require('./ourmodule.js');
var mathmodule = require('./mathmodule.js');

var server = http.createServer((req, res) => {
   fs.readFile('index.html', (err, data) => {
       //res.writeHead(200, {'Content-Type': 'text/html'});
       res.write(data);
       return res.end();
   });
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

console.log(mathmodule.add(2,3));
console.log(mathmodule.sub(5,2));
console.log(mathmodule.mul(5,5));
console.log(mathmodule.div(24,3));

