import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const findNum = Number(input[2]);
const numArray = input[1].split(' ').map((obj) => Number(obj));

const findNumArray = numArray.filter((f) => f === findNum)

console.log(findNumArray.length);