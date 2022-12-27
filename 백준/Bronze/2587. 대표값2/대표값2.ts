import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numberArray = input.map((obj) => Number(obj)).sort((a,b) => a-b);

let average = 0;
let sum = 0;

numberArray.forEach((obj) => {
    sum+=obj
})

console.log(Math.floor(sum/5));
console.log(numberArray[Math.floor(numberArray.length / 2)])