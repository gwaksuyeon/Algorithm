import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

const word = input.replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, '1');

console.log(word.split('').length)