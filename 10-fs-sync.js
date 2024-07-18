//beshi time nibe. ekta user kaj korle oita shesh na howa prjnto onnojn kaj korte parbe na
const { readFileSync, writeFileSync } = require("fs");
console.log('start');
const first = readFileSync('./content/first.txt','utf8');//utf8 ta optional
const second = readFileSync('./content/second.txt','utf8');

console.log(first,second);

writeFileSync('./content/result-sync.txt',`Here is the result : ${first} , ${second}`, {flag:'a'});// flag: a eta optional. eta notun file ta k override na kore append kore
console.log('done with this task');
console.log('starting the next one');