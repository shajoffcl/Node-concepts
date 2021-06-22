//console.dir(arguments, {depth:0});
console.dir(process, {depth:0});

process.stdin.resume();
process.stdout.write('process\n');

const index=require('./global');
console.log(index);

/*
note--> u can import this module without exporting

*/