var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var ext = '.' + process.argv[3];
var count;
fs.readdir(dir, function doneReading(err, files) { 
    files.forEach(function (file) {
       if (path.extname(file) === ext )  {
    console.log(file);

       }
    }   
    )

});
