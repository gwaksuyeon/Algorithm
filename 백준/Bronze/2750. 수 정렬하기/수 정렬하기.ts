import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);

let numberArray = [];

for(let i=1; i<=count; i++) {
    numberArray.push(Number(input[i]))
}

const res = numberArray.sort((a,b) => a-b);

for(let i=0; i<count; i++) {
    console.log(res[i]);
}