import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);

for(let i=0; i<count; i++) {
    const array = input[i+1].split(' ');
    
   console.log(`Case #${i+1}: ${Number(array[0])} + ${Number(array[1])} = ${Number(array[0]) + Number(array[1])}`)
}