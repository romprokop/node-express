// CommonJS, every file in Node is module (by default)
// Modules - Encapsulated Code (only share minimun)

const { rom, alex, serhiy } = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavor');
require('./7-mind-grenade');

//local variable
 const users = [rom, alex, serhiy];


 // users.map((user) => {
 //    console.log(sayHi(user))
 // });


console.log('data', {data, users});
