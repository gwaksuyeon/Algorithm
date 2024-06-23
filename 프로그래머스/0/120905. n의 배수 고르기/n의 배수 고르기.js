function solution(n, numlist) {
    let answer = numlist.filter(f => f%n === 0)
    
    return answer;
}