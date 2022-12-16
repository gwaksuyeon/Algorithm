import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

const Char = input;

console.log(Char.charCodeAt(0))
