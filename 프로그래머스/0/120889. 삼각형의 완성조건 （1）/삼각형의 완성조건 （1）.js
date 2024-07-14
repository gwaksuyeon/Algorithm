function solution(sides) {
    let answer = 0
    
    const sortArray = sides.sort((a,b) => a-b)
    
    answer = sortArray[0]+sortArray[1] > sortArray[2] ? 1 :2
    
    return answer;
}