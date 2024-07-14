function solution(n) {
    let answer = 0;
    
    for(let i=1;;i++) {
        if(i>n){
            break;
        } 
        
        if(n%i === 0) {
            answer++;
        }
    }
    
    return answer;
}