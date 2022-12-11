import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numArray = input.map((obj)=>Number(obj));

const max = Math.max(...numArray);
const findIndex = numArray.findIndex((f) => f === max);

console.log(max)
console.log(findIndex + 1)

