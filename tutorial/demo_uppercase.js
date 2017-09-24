//npm is a package manager for node.js
//npm gets installed when you install node.js
//what we expect to see is 'hello world' string to use the upper-case model

var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(uc("Hello World!"));
    res.end();
}).listen(8080);