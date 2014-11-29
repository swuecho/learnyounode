var level = require('level');
var fs = require('fs');
var db = level(process.argv[2]);
var items = fs.readFileSync(process.argv[3]).toString().split('\n');
var ops = items.map( function (item) {
    var splited = item.split(',');
    // value is ignored for del
    return { type: splited[0], key: splited[1], value: splited[2]}
    /* 
    if (splited.length === 3 ) {
        return { type: splited[0], key: splited[1], value: splited[2]}
    } else {
        return { type: splited[0], key: splited[1]}
    }
    */
});
//console.log(ops);
db.batch(ops, function(err) {
    if (err) return console.log('Ooops!', err)
    console.log('Great success dear leader!')
})
