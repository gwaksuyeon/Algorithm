function solution(array) {
    let answer = [];
    
    const max = Math.max(...array);
    const findIndex = array.findIndex(f => f===max)
    
    answer = [max, findIndex]
    return answer;
}