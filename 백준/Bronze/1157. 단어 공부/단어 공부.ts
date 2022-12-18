import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

let alphabetArray = new Array(26).fill(0);
const word = input.toUpperCase();
const wordArray = word.split('');

wordArray.forEach((obj,index) => {
    alphabetArray[wordArray[index].charCodeAt(0) - 65]++;
})

const max = Math.max(...alphabetArray)

const res = alphabetArray.filter((f) => f === max)

if(res.length === 1) {
    console.log(String.fromCharCode(alphabetArray.findIndex((f) => f === max) + 65))
} else {
    console.log("?")
}
