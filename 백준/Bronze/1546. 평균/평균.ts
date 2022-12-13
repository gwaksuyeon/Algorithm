import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0])
const scoreArray = input[1].split(' ').map((obj) => Number(obj));

const max = Math.max(...scoreArray);
let res = 0;

for(let i=0; i<count; i++) {
    res += scoreArray[i] / max * 100
}

console.log(res/count);