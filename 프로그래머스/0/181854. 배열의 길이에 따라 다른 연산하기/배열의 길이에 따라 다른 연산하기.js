function solution(arr, n) {
    let answer = [...arr];
    
    if(arr.length % 2 === 0) {
        for(let i = 1; i<= arr.length; i+=2) {
            answer[i] += n
        }
    }
    
    if(arr.length % 2 !== 0) {
        for(let i = 0; i<= arr.length; i+=2) {
            answer[i] += n
        }
    }
    
    return answer;
}