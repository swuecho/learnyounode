var fs = require('fs');
var count;
fs.readFile(process.argv[2], function doneReading(err, fileContents) { count = fileContents.toString().split('\n').length  - 1; console.log(count) })
