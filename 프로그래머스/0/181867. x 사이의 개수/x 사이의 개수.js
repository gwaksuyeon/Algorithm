function solution(myString) {
    const answer = myString.split('x').map(text=>text.length);
    return answer;
}