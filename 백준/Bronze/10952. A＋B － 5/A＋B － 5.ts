import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

for(let i=0;;i++) {
    const array = input[i].split(' ');
    
    if(Number(array[0])===0 && Number(array[1])===0) {
        break;
    }
    
    console.log(Number(array[0])+Number(array[1]))
}