function solution(cipher, code) {
    let answer = '';
    
    let array = cipher.split('')
    let result = []
    for(let i=1; i<=array.length; i++) {
        if(i % code === 0) {
            result.push(array[i-1])
        }
    }
    
    answer = result.join('')
    
    return answer;
}