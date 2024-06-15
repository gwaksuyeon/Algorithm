function solution(my_string, overwrite_string, s) {
    let answer = '';
    
    const frontString = my_string.slice(0,s);
    const replaceValue = `${frontString}${overwrite_string}`;
    
    if(replaceValue.length < my_string.length) {
        const index = my_string.length - replaceValue.length
        answer = `${replaceValue}${my_string.slice(-index)}`
    }
    
    else {
        answer = replaceValue;
    }
    
    return answer;
}