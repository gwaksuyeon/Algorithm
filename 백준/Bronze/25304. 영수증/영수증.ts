import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const total = Number(input[0]);
const goodsCount = Number(input[1]);

let totalPrice = 0;

for(let i=0; i<goodsCount; i++) {
    const array = input[i+2].split(' ');
    
    totalPrice += Number(array[0]) * Number(array[1]);
}

if(total === totalPrice) {
    console.log('Yes')
} else {
    console.log('No')
}