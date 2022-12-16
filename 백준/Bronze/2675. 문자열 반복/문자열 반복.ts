import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);

for(let i=1; i<=count; i++) {
    const wordCount = Number(input[i].split(' ')[0]);
    const word = input[i].split(' ')[1];
    
    const splitwWordArray = word.split('');
    
    let result = '';
    
    splitwWordArray.forEach((obj) => {
        result += obj.repeat(wordCount);
    })
    
    console.log(result)
}