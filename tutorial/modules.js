//to use a module use the require() function
var http = require("http")

//a module to return date time
exports.myDateTime = function () {
    return Date();
};

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('This is text in the document');
}).listen(8080);

