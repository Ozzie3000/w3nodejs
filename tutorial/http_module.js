//Node.js has a built in module HTTP
//THis allows nodejs to transfer over http
var http = require('http');

//The HTTP module can create an HTTP server which listens to server ports and gives a response back to the client.

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
//The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.