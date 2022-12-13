import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const count = Number(input[0]);

for(let i=1; i<=count; i++) {
    const classArray = input[i].split(' ').map((obj) => Number(obj));
    let totalSum = 0;
    const person = classArray[0];
    
    for(let j=1; j<=person; j++) {
        totalSum+=classArray[j];
    }
    
    const classAverage = totalSum / person;

    classArray.shift();
    const topPerson = classArray.filter((f) => f>classAverage).length;
    
    console.log(`${(topPerson/person*100).toFixed(3)}%`);
}