import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);

let paper = Array.from(Array(100), () => Array(100).fill(0));

for(let i=1; i<=count; i++) {
    const location = input[i].split(' ').map((obj) => Number(obj));
    const xLocation = location[0];
    const yLocation = location[1];
    
    for(let x=0; x<10; x++) {
        for(let y=0; y<10; y++) {
            paper[xLocation+x][yLocation+y]=1;
        }
    }
}

let result = 0;

for(let i=0; i<100; i++) {
    for(let j=0; j<100; j++){
       result+=paper[i][j]
    }
}

console.log(result)
