function solution(money) {
    let answer = [];
    
    const drink = Math.floor(money/5500)
    
    answer.push(drink);
    answer.push(money - (5500 * drink))
    
    
    return answer;
}