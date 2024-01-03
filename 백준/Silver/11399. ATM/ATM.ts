const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const count = input[0];
const array = input[1].split(" ").map((obj) => Number(obj));

const sortArray = array.sort((a, b) => a - b);

let sum = 0;
let sumArray: number[] = [];

for (let i = 0; i < sortArray.length; i++) {
  sum += sortArray[i];
  sumArray.push(sum);
}

let result = 0;

for (let i = 0; i < sumArray.length; i++) {
  result += sumArray[i];
}

console.log(result);
