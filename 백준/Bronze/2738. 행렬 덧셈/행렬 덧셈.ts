import fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

const size = input[0].split(' ');
const N = Number(size[0]);
const M = Number(size[1]);

for (let i=1; i<=N; i++) {
    const array1 = input[i].split(' ').map((obj) => Number(obj));
    const array2 = input[i+N].split(' ').map((obj) => Number(obj));
    
    let res = [];
    for(let j=0; j<M; j++) {
        res.push(array1[j]+array2[j])
    }
    
    console.log(res.join(' '))
}