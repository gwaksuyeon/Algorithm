import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num1 = Number(input[0].split('').reverse().join(''));
const num2 = Number(input[1].split('').reverse().join(''));

console.log(num1 > num2 ? num1 : num2)

