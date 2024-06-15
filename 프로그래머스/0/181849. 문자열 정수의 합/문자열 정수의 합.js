function solution(num_str) {
    let answer = 0;
    
    const array = num_str.split('').map(Number);
    
    array.forEach(value => {
        answer+=value;
    })
    
    return answer;
}