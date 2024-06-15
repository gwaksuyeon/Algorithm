function solution(start_num, end_num) {
    let answer = [];
    
    const fillCount = end_num - start_num;
    
    for(let i=1; i<fillCount; i++) {
        answer.push(start_num+i)    
    }
    
    answer = [start_num,...answer,end_num]
    
    return answer;
}