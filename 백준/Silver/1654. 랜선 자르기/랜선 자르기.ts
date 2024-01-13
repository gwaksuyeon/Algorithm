const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0].split(" ")[1]);
input.shift();

const array = input.map(Number).sort((a, b) => a - b);

let min = 1;
let max = Math.max(...array);

while (min <= max) {
  let middle = Math.floor((min + max) / 2);

  let sum = 0;
  array.forEach((obj) => (sum += Math.floor(obj / middle)));

  if (sum >= N) {
    min = middle + 1;
  } else {
    max = middle - 1;
  }
}

console.log(max);