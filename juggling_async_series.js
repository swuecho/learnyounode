 var http = require('http');
 var bl = require('bl');
 var async = require('async');
 var urls = process.argv.slice(2);
 
 async.eachSeries(urls, function(url, cb) {
         http.get(url, function(response) {
             response.pipe(bl(function(err, data) {
                 var content = data.toString();
                 console.log(content);
                 cb(); // this is important to indicate that one task is down
             }));
         });
     },
     function(err ) {
         if (err) console.log(err);
     }

 );
