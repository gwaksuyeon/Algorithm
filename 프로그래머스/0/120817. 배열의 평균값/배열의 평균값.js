function solution(numbers) {
    let answer = 0;
    
    let sum = 0;
    numbers.forEach(num => {
        sum+=num;
    })
    
    answer = sum/numbers.length;
    
    return answer;
}