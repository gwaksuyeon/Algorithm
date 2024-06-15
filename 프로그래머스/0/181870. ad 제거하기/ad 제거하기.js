function solution(strArr) {
    let answer = strArr.filter(f => !f.includes('ad'));
    return answer;
}