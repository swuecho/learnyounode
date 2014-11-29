var argv = process.argv,
 sum = 0;

for ( var i =2 ;  i < argv.length; i++) {
    sum += Number(argv[i])
} 

console.log(sum);

