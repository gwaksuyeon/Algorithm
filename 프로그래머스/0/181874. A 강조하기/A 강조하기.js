function solution(myString) {
    const answer = myString.toLowerCase().replace(/[a]/gi,'A');
    return answer;
}