function solution(my_string) {
    const answer = my_string.replace(/[aeiou]/gi, '');
    return answer;
}