var http = require('http');
var map = require('through2-map')

var server = http.createServer(function (req, res) {
    var file = process.argv[3];
    // set the header for response
    res.writeHead(200, { 'content-type': 'text/plain' });
    if (req.method === 'POST') {
	req.pipe(map(function (chunk) {
	    return chunk.toString().toUpperCase();
	})).pipe(res);
    }
})
server.listen(process.argv[2]);

