function solution(n) {
    let answer = 0;
    
    const array = `${n}`.split('');
    array.forEach(num => {
        answer+=Number(num)
    })
    
    return answer;
}