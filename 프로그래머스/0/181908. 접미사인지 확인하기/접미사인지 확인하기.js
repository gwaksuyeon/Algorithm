function solution(my_string, is_suffix) {
    let answer = 0;
    
    if(my_string.includes(is_suffix)) {
        let array = []
        for(let i=0; i<my_string.length; i++) {
           array.push(my_string.slice(i))
        }
        
        if(array.includes(is_suffix)) {
            answer = 1;
        }
    }
    
    return answer;
}