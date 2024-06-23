function solution(my_string) {
    let answer = '';
    
    const array = my_string.split('');
    let result = [];
    
    array.forEach(text => {
        if(text === text.toLowerCase()) {
            result.push(text.toUpperCase())
        }
        
        if(text === text.toUpperCase()) {
            result.push(text.toLowerCase())
        }
    })
    
    answer = result.join('')
    
    return answer;
}