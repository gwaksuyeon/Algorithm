function solution(strArr) {
    const answer = strArr.map((text,index) => {
        if(index % 2 === 0) {
            return text.toLowerCase()
        }
        
        if(index % 2 !== 0) {
            return text.toUpperCase()
        }
    });
    return answer;
}