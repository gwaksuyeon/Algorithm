function solution(str1, str2) {
    let answer = '';
    
    let result = []
    const str1Array = str1.split('');
    const str2Array = str2.split('');
    
    for(let i=0; i<str1Array.length; i++) {
        result.push(str1Array[i]);
        result.push(str2Array[i])
    }
    
    answer = result.join('')
    
    return answer;
}