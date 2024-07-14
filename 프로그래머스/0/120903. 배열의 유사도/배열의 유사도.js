function solution(s1, s2) {
    const answer = s1.filter(f => s2.includes(f)).length
    
    return answer;
}