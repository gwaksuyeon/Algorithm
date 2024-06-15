function solution(num_list) {
    let answer = [...num_list];
    
    const last = num_list.slice(-1);
    const prevLast = num_list.slice(-2, -1)
    
    if(last > prevLast) {
        answer.push(last - prevLast)
    }
    
    if(last <= prevLast) {
        answer.push(last*2)
    }
    
    return answer;
}