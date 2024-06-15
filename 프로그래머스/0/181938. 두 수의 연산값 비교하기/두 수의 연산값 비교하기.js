function solution(a, b) {
    let answer = 0;
    
    const joinNumber = Number(`${a}${b}`);
    const calcNumber = 2*a*b;
    
    answer = Math.max(joinNumber, calcNumber)
    
    return answer;
}