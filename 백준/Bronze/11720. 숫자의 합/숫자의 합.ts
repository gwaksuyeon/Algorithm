import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);

const numArray = input[1].split('').map((obj) => Number(obj));

let result = 0;
numArray.forEach((obj) => {
    result+=obj
})

console.log(result)
