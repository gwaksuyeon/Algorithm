function solution(num1, num2) {
    let answer = 0;
    
    const result = num1/num2
    
    answer = Math.floor(result * 1000)
    
    return answer;
}