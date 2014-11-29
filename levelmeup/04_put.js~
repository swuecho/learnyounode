var level = require('level');
var db = level(process.argv[2]);

var map = {};
var keys = [];
var count = 0;

function level_get(count) {
    var key = 'key' + count;
    keys.push(key);
    db.get(key, function(err, value) {
        if (value) {
            map[key] = value
        }
        if (count == 100) {
            keys.forEach(function(item) {
                if (map[item]) {
                    console.log(item + '=' + map[item]);
                }
            });
        }
        count++; // every time this callback run, count ++
        // only count is ++ 100 times, the output will be triggered

    });

}


for ( var i = 0; i <= 100; i++) {
    level_get(i);
}
