const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const NArray = new Set(input[1].split(" ").map(Number));
const MArray = input[3].split(" ").map(Number);

let result: number[] = [];

MArray.forEach((obj) => {
  if (NArray.has(obj)) {
    result.push(1);
  } else {
    result.push(0);
  }
});

console.log(result.join("\n"));