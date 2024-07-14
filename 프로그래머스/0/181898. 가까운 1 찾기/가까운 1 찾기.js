function solution(arr, idx) {
    const answer = arr.findIndex((f,index) => f === 1 && index >= idx);
    return answer;
}