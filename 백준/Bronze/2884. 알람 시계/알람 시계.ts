import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const hour = Number(input[0]);
const minutes = Number(input[1]);

const converMinutes = hour * 60 + minutes;
const subMinutes = converMinutes - 45;

if(subMinutes < 0) {
    console.log(`23 ${60 + subMinutes}`)
} else {
    console.log(`${Math.floor(subMinutes / 60)} ${Math.floor(subMinutes % 60)}`)
}