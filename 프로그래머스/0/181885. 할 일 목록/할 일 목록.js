function solution(todo_list, finished) {
    const answer = todo_list.filter((f,index) => finished[index] === false)
    
    return answer;
}