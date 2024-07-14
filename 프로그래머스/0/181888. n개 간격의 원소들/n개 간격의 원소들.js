function solution(num_list, n) {
    const answer = num_list.filter((f,index) => index%n === 0);
    return answer;
}