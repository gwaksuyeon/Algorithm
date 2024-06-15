function solution(num_list) {
    let answer = 0;
    
    let even = [];
    let odd = [];
    
    num_list.forEach(value => {
        if(value % 2 === 0) {
            even.push(value)
        }
        
        if(value % 2 !== 0) {
            odd.push(value)
        }
    })
    
    const evenNumber = Number(even.join(''));
    const oddNumber = Number(odd.join(''));
    answer = evenNumber+oddNumber
    
    return answer;
}