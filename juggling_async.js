 var http = require('http');
 var bl = require('bl');
 var async = require('async');
 var urls = process.argv.slice(2);
cb = function (err, res) {
    console.log(res)
};
 async.each(urls, function(url, cb) {
         http.get(url, function(response) {
             response.pipe(bl(function(err, data) {
                 var content = data.toString();
                 cb(null, content);
             }));
         });
     },
     function(err ) {
         if (err) console.log(err);
     }

 );
