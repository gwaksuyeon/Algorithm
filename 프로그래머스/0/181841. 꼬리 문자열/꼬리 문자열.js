function solution(str_list, ex) {
    let answer = str_list.filter(f => !f.includes(ex)).join('');
    return answer;
}