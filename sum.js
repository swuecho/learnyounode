var argv = process.argv;

var sum = 0, i;

for ( i =2 ;  i < argv.length; i++) {
    sum += Number(argv[i])
} 

console.log(sum);

