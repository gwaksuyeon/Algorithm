import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

const num = Number(input);
let total = 1;

for(let i=1; ;i++) {
    if(total >= num) {
        console.log(i)
        break;
    }
    total += 6*i
}