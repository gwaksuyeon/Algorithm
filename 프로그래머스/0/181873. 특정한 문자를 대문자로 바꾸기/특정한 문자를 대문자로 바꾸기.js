function solution(my_string, alp) {
    let answer = '';
    
    if(my_string.includes(alp)) {
        const array = my_string.split('');
        let resultArray = []
        
        array.forEach(text => {
            if(text === alp) {
                resultArray.push(text.toUpperCase())
            }
            
            if(text !== alp) {
                resultArray.push(text)
            }
        })
        
        answer = resultArray.join('')
    }
    
    if(!my_string.includes(alp)) {
        answer = my_string
    }
    
    return answer;
}