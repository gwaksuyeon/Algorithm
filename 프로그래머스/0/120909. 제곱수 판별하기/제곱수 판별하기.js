function solution(n) {
    let answer = 2;
    
    const sqrt = Math.sqrt(n);
    
    if(Number.isInteger(sqrt) && Math.pow(sqrt,2) === n) {
        answer = 1
    }
    
    return answer;
}