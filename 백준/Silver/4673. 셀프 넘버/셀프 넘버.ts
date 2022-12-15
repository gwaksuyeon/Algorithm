const d=(n:number) => {
    let numArray = `${n}`.split('').map((obj) => Number(obj));
    
    let result = 0;
    
    numArray.forEach((obj) => result+=obj);
    
    return n+result;
}

const count = 10000;
let numArray = [...Array(count+1)].map((obj,index) => index);

for(let i=0; i<count; i++) {
    numArray[d(i)] = -1;
}

const result = numArray.filter((f) => f !== -1);

result.forEach((obj) => console.log(obj));