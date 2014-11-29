var http = require('http')
var fs = require('fs')
var server = http.createServer(function (req, res) {
    var file = process.argv[3];
    var src = fs.createReadStream(file);
    // set the header for response
    res.writeHead(200, { 'content-type': 'text/plain' });
    src.pipe(res);
      // request handling logic...
})
server.listen(process.argv[2]);

