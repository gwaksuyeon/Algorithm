function solution(my_string) {
    let answer = [];
    
    const array = my_string.split('');
    
    for(let i=0; i<array.length; i++) {
        answer.push(my_string.slice(i))
    }
    
    return answer.sort();
}