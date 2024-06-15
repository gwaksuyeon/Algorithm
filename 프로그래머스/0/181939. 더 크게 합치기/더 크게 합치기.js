function solution(a, b) {
    let answer = 0;
    
    const resultA = Number(`${a}${b}`)
    const resultB = Number(`${b}${a}`)
    
    answer = Math.max(resultA,resultB)
    
    return answer;
}