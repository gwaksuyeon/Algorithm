import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

let numArray = [];

for(let i=0; i<9; i++) {
    const res = input[i].split(' ').map((obj) => Number(obj));

    numArray.push(Math.max(...res))
}

const Max = Math.max(...numArray);

for(let i=0; i<9; i++) {
    if(input[i].includes(`${Max}`)) {
        const array = input[i].split(' ').map((obj) => Number(obj));
        
        const findIndex = array.findIndex((f) => f===Max);
        
        console.log(Max);
        console.log(`${i+1} ${findIndex+1}`)
        break;
    }
}
