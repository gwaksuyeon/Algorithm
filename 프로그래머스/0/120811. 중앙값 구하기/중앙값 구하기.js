function solution(array) {
    let answer = 0;
    
    const sortArray = array.sort((a,b) => a-b);
    
    const center = Math.floor(array.length/2);
    
    answer = sortArray[center]
    
    return answer;
}