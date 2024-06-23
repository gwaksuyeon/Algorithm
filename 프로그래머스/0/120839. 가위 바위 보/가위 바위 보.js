function solution(rsp) {
    let answer = '';
    
    let array = rsp.split('');
    let result = [];
    
    array.forEach(text => {
        if(text === '2') {
            result.push('0')
        }
        
        if(text === '0') {
            result.push('5')
        }
        
        if(text === '5') {
            result.push('2')
        }
    })
    
    answer = result.join('')
    
    return answer;
}