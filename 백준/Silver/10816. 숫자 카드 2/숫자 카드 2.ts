const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const N = input[1].split(" ").map(Number);
const M = input[3].split(" ").map(Number);

const countObj = N.reduce((prev, current) => {
  prev[current] = prev[current] ? prev[current] + 1 : 1;
  return prev;
}, {});

const result = M.map((num) => (countObj[num] ? countObj[num] : 0));

console.log(result.join(" "));
