var http = require("http")

//http.createServer(function function_name(argument) {
	// body...
//})

http.createServer(function (req, res){
	res.writeHead(200, {"Content-Type": "text/plain"});
	res.end("Hello World");
}).listen(8080);