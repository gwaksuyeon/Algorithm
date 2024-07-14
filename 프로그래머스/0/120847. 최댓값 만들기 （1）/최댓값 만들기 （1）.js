function solution(numbers) {
    let answer = 0;
    
    const array = numbers.sort((a,b) => b-a);
    answer = array[0]*array[1]
    
    return answer;
}