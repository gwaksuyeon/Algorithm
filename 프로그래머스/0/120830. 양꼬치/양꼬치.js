function solution(n, k) {
    let answer = 0;
    
    const serviceCount = Math.floor(n/10);
    
    answer = (n*12000)+(k*2000)-(serviceCount*2000)
    
    return answer;
}