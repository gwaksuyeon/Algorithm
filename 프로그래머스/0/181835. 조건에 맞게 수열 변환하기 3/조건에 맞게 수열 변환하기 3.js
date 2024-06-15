function solution(arr, k) {
    let answer = [];
    
    if(k%2 === 0) {
       arr.forEach(value => {
            answer.push(value+k)
        }) 
    }
    
    if(k%2 !== 0) {
        arr.forEach(value => {
            answer.push(value*k)
        })
    }
    
    return answer;
}