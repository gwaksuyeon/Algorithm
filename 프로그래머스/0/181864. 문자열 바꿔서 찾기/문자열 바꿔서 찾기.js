function solution(myString, pat) {
    let answer = 0;
    
    let convert = [];
    let convertText = '';
    
    myString.split('').forEach(text => {
        if(text === 'A') {
            convert.push('B')
        }
        
        if(text === 'B') {
            convert.push('A')
        }
     })
    
    convertText = convert.join('')
    
    if(convertText.includes(pat)) {
        answer = 1;
    }
    
    return answer;
}