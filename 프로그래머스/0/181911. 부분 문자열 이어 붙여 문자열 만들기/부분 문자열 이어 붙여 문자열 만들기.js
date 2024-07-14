function solution(my_strings, parts) {
    let answer = '';
    
    let result = []
    parts.forEach((part, index) => {
        result.push(my_strings[index].slice(part[0], part[1]+1));
    })
    
    answer = result.join('')
    
    return answer;
}