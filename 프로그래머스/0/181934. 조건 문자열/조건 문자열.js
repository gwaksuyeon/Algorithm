function solution(ineq, eq, n, m) {
    let answer = 0;
    
    if(eq === '!') {
       answer = 0
    }
    
    if(ineq === '<') {
        answer = n  <= m ? 1 : 0;
    }
    
    if(ineq === '>') {
        answer = n >= m ? 1 : 0;
    }
    
    return answer;
}