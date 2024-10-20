function solution(maps) {
    let answer = -1;
    const N = maps.length; // 행(y)
    const M = maps[0].length; // 열(x)
    const dy = [-1,1,0,0]; // 상하좌우
    const dx = [0,0,-1,1]; // 상하좌우
    const queue = [];
    
    queue.push([0,0,1]); // y,x,이동수
    
    while(queue.length > 0) {
        const current = queue.shift();
        if(!current) break;
        
        const [y,x,count] = current;
        
        if(y === N-1 && x === M-1) {
            return answer = count
        }
        
        for(let i=0; i<4; i++) {
            const newY = y+dy[i];
            const newX = x+dx[i];
            
            if(newY>=0 && newY<N && newX>=0 && newX<M && maps[newY][newX] === 1) {
                // 방문 표시
                maps[newY][newX] = 0;
                queue.push([newY,newX,count+1]);
            }
        }
    }
    
    
    return answer;
}