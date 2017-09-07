// The Node.js file system module allow you to work with the file system on your computer.
// To include the File System module, use the require() method:
// common uses: Read files, Create files, Update files, Delete files, Rename files
var http = require('http');
var fs = require('fs');


//
http.createServer(function (req, res) {
  fs.readFile('demo1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8080);