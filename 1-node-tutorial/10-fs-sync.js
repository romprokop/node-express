const { readFileSync, writeFileSync } = require('fs');

console.log('1 - start');

const first = readFileSync('./content/first.txt','utf8');
const second = readFileSync('./content/first.txt','utf8');

// console.log(first, second);

writeFileSync(
	`./content/result-sync.txt`, 
	`Here is the result \n${first}, \n${second}`,
	{ flag: 'a'}
);

console.log('2 - done with this task');
console.log('3 - starting the next one');