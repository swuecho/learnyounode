 var http = require('http');
 var bl = require('bl');
 var urls = process.argv.slice(2);
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
 for (var i = 0; i < urls.length; i++) {
     http.get(urls[i], callback);
 }
