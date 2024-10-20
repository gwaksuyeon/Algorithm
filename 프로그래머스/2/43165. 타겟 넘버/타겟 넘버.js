function solution(numbers, target) {
    let answer = 0;
    
    function onDfs(index, sum) {
        if(index === numbers.length) {
            if(sum===target) {
                answer+=1;
            }
            return;
        }
        
        onDfs(index+1, sum+numbers[index]);
        onDfs(index+1, sum-numbers[index]);
    }
    
    onDfs(0,0)
    
    return answer;
}