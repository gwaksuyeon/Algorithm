import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numArray = input[1].split(' ').map((obj) => Number(obj));

const min = Math.min(...numArray);
const max = Math.max(...numArray);

console.log(`${min} ${max}`)
