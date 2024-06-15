function solution(num_list) {
    let answer = 0;
    
    let multiplication = 1;
    let sum = 0;
    
    num_list.forEach(value => {
        multiplication*=value;
        sum+=value;
    })
    
    if(Math.pow(sum,2) > multiplication) {
        answer = 1;
    }
    
    return answer;
}