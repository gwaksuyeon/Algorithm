function solution(num_list, n) {
    let answer = [];
    
    const frontArray = num_list.slice(0,n);
    const backArray = num_list.slice(n)
    
    answer = [...backArray,...frontArray]
    
    return answer;
}