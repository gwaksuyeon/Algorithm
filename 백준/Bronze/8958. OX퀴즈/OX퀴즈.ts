import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);

for(let i=1; i<=count; i++) {
    let score = 0;
    let result = 0;
    let oxArray = input[i].split('');
    
    for(let j=0; j<oxArray.length; j++) {
        if(oxArray[j] === 'X') {
            score = 0;
            continue;
        }
        
        score++;
        result += score;
    }
    
    console.log(result);
}