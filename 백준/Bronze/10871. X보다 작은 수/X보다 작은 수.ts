import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num = input[0].split(' ').map((obj) => Number(obj))[1];
const numArray = input[1].split(' ').map((obj) => Number(obj));

const findNumArray = numArray.filter((f) => f < num);

console.log(findNumArray.join(' '))
