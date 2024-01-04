const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

input.shift();
const initArray = input.map((obj) => {
  const array = obj.split(" ");

  return array.map(Number);
});

const result = initArray.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  }

  return a[0] - b[0];
});

console.log(result.map((obj) => obj.join(" ")).join("\n"));