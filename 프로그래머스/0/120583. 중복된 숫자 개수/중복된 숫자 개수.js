function solution(array, n) {
    let answer = array.filter(f => f === n).length;
    return answer;
}