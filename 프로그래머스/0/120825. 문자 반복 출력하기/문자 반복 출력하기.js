function solution(my_string, n) {
    let answer = '';
    
    const array = my_string.split('');
    
    array.forEach(text => {
        answer += text.repeat(n)
    })
    
    return answer;
}