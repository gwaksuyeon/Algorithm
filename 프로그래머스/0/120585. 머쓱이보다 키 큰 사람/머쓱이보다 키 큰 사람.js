function solution(array, height) {
    const answer = array.filter(f => f > height).length;
    return answer;
}