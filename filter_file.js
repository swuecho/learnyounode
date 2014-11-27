var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, cb) {

fs.readdir(dir, function doneReading(err, files) { 
    if (err) { return cb(err)  } // early return
    files.forEach(function (file) {
       if (path.extname(file) === ext )  {
        cb(null, file);
       }
    }   
    )
});
};
