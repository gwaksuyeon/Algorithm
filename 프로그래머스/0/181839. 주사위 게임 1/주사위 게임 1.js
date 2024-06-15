function solution(a, b) {
    let answer = 0;
    
    let isAEven = a % 2 === 0 ? true : false;
    let isBEven = b % 2 === 0 ? true : false;
    
    if(isAEven && isBEven) {
        answer = Math.abs(a-b)
    }
    
    if((isAEven && !isBEven) || (!isAEven && isBEven)) {
        answer = 2*(a+b)
    }
    
    if(!isAEven && !isBEven) {
        answer = Math.pow(a,2) + Math.pow(b,2);
    }
    
    return answer;
}