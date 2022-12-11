import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().trim();

const firstNum = Number(input);
let count = 0;
let newNum = 0;

const onRecursion = (num) => {
    const ten = Math.floor(num/10);
    const one = Math.floor(num%10);
    
    let addNum = ten + one;
    let newOne = Math.floor(addNum%10)
    let newNum = Number(`${one}${newOne}`)
    count++;
    
    if(newNum === firstNum) {
        console.log(count)
    } else {
        onRecursion(newNum)
    }
}

onRecursion(firstNum)
