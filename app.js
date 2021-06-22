console.log('App is working');

const sum = require('./module');
require('./index');

console.log(sum(5,3));

/* 

require function has cache concept its take the value only one time 

*/