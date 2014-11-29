var level = require('level');
var db = level(process.argv[2]);
var map = {};
var keys = [];
var count = 0;

for (var i = 0; i <= 100; i++) {
    var key = 'key' + i;
    console.log(i);
    keys.push(key);
    db.get(key, function(err, value) {
        if (value) {
            console.log(key);
            console.log(value);
            map[key] = value
        }
        count++; // every time this callback run, count ++
        // only count is ++ 100 times, the output will be triggered
        if (count == 100) {
            keys.forEach(function(item) {
                if (map[item]) {
                    console.log(item + '=' + map[item]);
                }
            });
        }

    });
}
