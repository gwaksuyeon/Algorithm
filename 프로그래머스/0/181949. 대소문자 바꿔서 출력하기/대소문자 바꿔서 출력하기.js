const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    
    const array = str.split('')
    let result = [];
    
    array.forEach(text => {
        if(text === text.toUpperCase()) {
            result.push(text.toLowerCase());
        }
        
        if(text === text.toLowerCase()) {
            result.push(text.toUpperCase())
        }
    })
    
    console.log(result.join(''))
});