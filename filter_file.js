var fs = require('fs');
var path = require('path');

module.exports = function(dir, ext, cb) {

fs.readdir(dir, function doneReading(err, files) { 
    if (err) { return cb(err)  } // early return
    var filtered_files = files.filter(function (file) {
      return path.extname(file) === ext ;
    }   
    );
    cb(null, filtered_files);
});
};
