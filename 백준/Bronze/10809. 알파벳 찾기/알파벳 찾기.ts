import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

const alphabetCount = 26
let alphabetArray = []

for(let i=0; i<alphabetCount; i++) {
    alphabetArray[i] = String.fromCharCode(i+97);
}

const wordArray = input.split('');
let resultArray = [];

alphabetArray.forEach((obj) => {
    const findIndex = wordArray.findIndex((f) => f === obj);
    
    resultArray.push(findIndex);
})

console.log(resultArray.join(' '))