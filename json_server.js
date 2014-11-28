var http = require('http');
var strftime = require('strftime');
var url = require('url');

var server = http.createServer(function(req, res) {

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });

    var query = url.parse(req.url,true);
    var date = new Date(query.query.iso);
    if (query.pathname === '/api/unixtime') {
        res.write(JSON.stringify({
            unixtime: date.getTime()
        }));
    } else {
        if (query.pathname === '/api/parsetime') {
            res.write(JSON.stringify({
                hour: date.getHours(),
                minute: date.getMinutes(),
                second: date.getSeconds()
            }));
        }

    }
    res.end()
});
server.listen(process.argv[2])
