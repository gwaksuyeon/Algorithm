function solution(arr, delete_list) {
    const answer = [...arr, ...delete_list].filter(f => !delete_list.includes(f));
    
    return answer;
}