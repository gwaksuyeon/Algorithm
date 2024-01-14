const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const N = Number(input[0].split(" ")[1]);

const array = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let min = 0;
let max = Math.max(...array);
let result = 0;

while (min <= max) {
  let middle = Math.floor((min + max) / 2);

  let sum = 0;
  array.forEach((obj) => {
    if (obj - middle > 0) {
      sum += obj - middle;
    }
  });

  if (sum >= N) {
    if (middle > result) {
      result = middle;
    }

    min = middle + 1;
  } else {
    max = middle - 1;
  }
}

console.log(result);