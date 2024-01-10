const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

input.shift();

const A = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const B = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let result = 0;

A.forEach((obj, index) => {
  result += A[index] * B[index];
});

console.log(result);