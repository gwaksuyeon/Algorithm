const input = require('fs').readFileSync('dev/stdin').toString().trim();

const array = input.split(" ").map(Number);

const result = array.sort((a, b) => a - b);

console.log(result[1]);