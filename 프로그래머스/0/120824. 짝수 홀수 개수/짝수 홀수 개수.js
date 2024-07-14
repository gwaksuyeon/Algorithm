function solution(num_list) {
    const answer = [num_list.filter(f => f%2 ===0).length, num_list.filter(f => f%2 !==0).length]
    
    return answer;
}