var level = require('level');
var db = level(process.argv[2]);
var json = JSON.parse(process.argv[3]);

for (var propt in json) {
    db.put(propt, json[propt], function(err) {
        if (err) {
            return console.error('Error in put():', err)
        }
    });
}
