import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

const N = Number(input);

let result = 0;

for(let i=1; i<=N; i++) {
    if(i < 100) {
        result++;
        continue;
    }
    
    const splitNum = `${i}`.split('').map((obj) => Number(obj));
    
    if((splitNum[0]-splitNum[1]) === (splitNum[1] - splitNum[2])) {
        result++;
    } 
}

console.log(result)