import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const num1 = Number(input[0]);
const num2 = Number(input[1]);

const NUM2_ONE = Math.floor(num2%10);
const NUM2_TEN = Math.floor((num2%100)/10);
const NUM2_HUNDRED = Math.floor(num2/100);

console.log(num1 * NUM2_ONE);
console.log(num1 * NUM2_TEN);
console.log(num1 * NUM2_HUNDRED);
console.log(num1 * num2);