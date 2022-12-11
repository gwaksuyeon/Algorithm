import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const num1 = Number(input[0]);
const num2 = Number(input[1]);
const num3 = Number(input[2]);
const numbers = [num1, num2, num3];

if(num1 === num2 && num2 === num3 && num1 === num3) {
    console.log(10000 + num1 * 1000)
} else if (num1 === num2 || num2 === num3 || num1 === num3) {
    if(num1 === num2 || num1 === num3) {
        console.log(1000 + num1*100);
    } else{
        console.log(1000 + num2*100)
    }
} else {
    const max = Math.max(...numbers)
    console.log(max*100)
}

