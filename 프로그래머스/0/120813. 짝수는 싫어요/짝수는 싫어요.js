function solution(n) {
    let answer = [];
    
    let array = [];
    for(let i =1 ;i<=n; i+=2) {
        array.push(i)
    }
    
    answer = array.sort((a,b) => a-b)
    
    return answer;
}