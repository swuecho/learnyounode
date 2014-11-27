var filter_file = require('./filter_file.js');
var dir = process.argv[2];
var ext = '.' + process.argv[3];

filter_file(dir,ext, function(err, file) { 
    if (err) return err;    
    console.log(file) 
});
