var filter_file = require('./filter_file.js');
var dir = process.argv[2];
var ext = '.' + process.argv[3];

filter_file(dir,ext, function(err, files) { 
    if (err) return err;    
    files.forEach( function(file) {
    console.log(file) 
    });
});
