var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('What a World.  Love me some NodeJS. <br/> Port 3000');
}).listen(3000);