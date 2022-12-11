import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for(let i=0;;i++) {
    if(!input[i]) {
        break;
    }
    
    const array = input[i].split(' ');
    
    console.log(Number(array[0])+Number(array[1]))
}