function solution(my_string) {
    let answer = 0;
    
    const numberText = my_string.replace(/[^0-9]/g, '');
    
    const array = numberText.split('').map(Number);
    array.forEach(text => {
        answer += text
    })
    
    return answer;
}