import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const total = Number(input[0]);

for(let i=0; i<total; i++) {
    const array = input[i+1].split(' ');
    console.log(Number(array[0]) + Number(array[1]));
}