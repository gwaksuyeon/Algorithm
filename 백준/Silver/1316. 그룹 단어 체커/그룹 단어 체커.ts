import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);

let result = 0;

for(let i=1; i<=count; i++) {
    const wordArray = input[i].split('');
    let alphabetArray = [];
    let isGroupWord = true;
    
    for(let j=0; j<wordArray.length; j++) {
        if(alphabetArray.includes(wordArray[j])) {
            if(alphabetArray[alphabetArray.length-1] !== wordArray[j]) {
                isGroupWord = false;
                break;
            }
        } else {
            alphabetArray.push(wordArray[j])
        }
    }
    
    if(isGroupWord) {
        result++;
    }
}

console.log(result)