import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const input1 = input[0].split(' ').map((obj) => Number(obj));
const N = input1[0];
const k = input1[1];

const numberArray = input[1].split(' ').map((obj) => Number(obj)).sort((a,b)=> b-a);

const winner = numberArray.slice(0,k);
const min = Math.min(...winner);

console.log(min)