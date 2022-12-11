import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const time = input[0].split(' ');
const addTime = Number(input[1]);

const hour = Number(time[0]);
const minutes = Number(time[1]);

const converMinutes = hour * 60 + minutes;
const addMinutes = converMinutes + addTime;

const endHour = Math.floor(addMinutes / 60);
const endMinutes = Math.floor(addMinutes % 60);

console.log(`${endHour >= 24 ? endHour - 24 : endHour} ${endMinutes}`)