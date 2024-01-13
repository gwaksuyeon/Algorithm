const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

const N = input[1].split(" ").map(Number);
const M = input[3].split(" ").map(Number);

const setN = new Set(N);

const result = M.map((obj) => (setN.has(obj) ? 1 : 0));

console.log(result.join(" "));