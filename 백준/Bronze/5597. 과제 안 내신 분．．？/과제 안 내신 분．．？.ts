import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const numArray = input.map((obj)=>Number(obj)).sort((a,b) => a-b);
const newArray = [...Array(30)].map((obj,index) => index+1);

const result = newArray.filter((f) => !numArray.includes(f))

console.log(result[0]);
console.log(result[1]);

