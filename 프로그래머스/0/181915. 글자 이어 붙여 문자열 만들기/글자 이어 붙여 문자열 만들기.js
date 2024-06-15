function solution(my_string, index_list) {
    let answer = '';
    
    let stringArray = [];
    index_list.forEach(text => {
       stringArray.push(my_string[text]);
    })
    
    answer = stringArray.join('')
    
    return answer;
}