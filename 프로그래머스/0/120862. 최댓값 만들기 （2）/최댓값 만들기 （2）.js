function solution(numbers) {
    let answer = 0;
    
    const sortArray = numbers.sort((a,b) => a>b ? -1 : a<b ? 1 : 0);
    
    answer = Math.max(sortArray[0]*sortArray[1], sortArray[sortArray.length-1]*sortArray[sortArray.length-2])
    return answer;
}