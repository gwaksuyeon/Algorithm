import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

// A+Bx<Cx -> A<(C-B)x -> A/(C-B)<x

if(B >= C) {
    console.log(-1)
} else {
    console.log(Math.floor(A/(C-B) + 1))
}



