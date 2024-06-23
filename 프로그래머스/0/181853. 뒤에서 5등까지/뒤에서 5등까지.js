function solution(num_list) {
    let answer = [];
    
    const sortArray = num_list.sort((a,b) => a-b);
    answer = sortArray.slice(0,5)
    
    return answer;
}