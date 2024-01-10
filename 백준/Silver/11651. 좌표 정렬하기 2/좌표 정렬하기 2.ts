const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

input.shift();

const result = input.sort((a, b) => {
  if (Number(a.split(" ")[1]) === Number(b.split(" ")[1])) {
    return Number(a.split(" ")[0]) - Number(b.split(" ")[0]);
  }

  return Number(a.split(" ")[1]) - Number(b.split(" ")[1]);
});

console.log(result.join("\n"));