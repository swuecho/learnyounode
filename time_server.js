var net = require('net');
var strftime = require('strftime');
var server = net.createServer(function (socket) {
    var date = new Date();
    var date_string = strftime('%Y-%m-%e %H:%M', date)  
    socket.write(date_string);
    socket.end();
});
server.listen(process.argv[2])
