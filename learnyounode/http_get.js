 var http = require('http');

 var url = process.argv[2];
 callback = function(response) {

     response.on('data', function(chunk) {
            console.log(chunk.toString());
     });
     response.on('error', console.error)

 };

 var req = http.get(url, callback);
