function solution(my_string, num1, num2) {
    let answer = ''
    
    const convert1 = my_string[num1];
    const convert2 = my_string[num2];
    
    let array = my_string.split('');
    array[num1] = convert2;
    array[num2] = convert1;
    
    answer = array.join('')
    
    return answer;
}