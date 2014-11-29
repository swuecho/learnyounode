 var http = require('http');
 var bl = require('bl');
 var url = process.argv[2];
 callback = function(response) {
     response.pipe(bl(function(err, data) {
         if (err) {
             console.log(err);
             return
         }
         var content = data.toString();
         console.log(content.length);
         console.log(content);
     }))
 };

 var req = http.get(url, callback);
