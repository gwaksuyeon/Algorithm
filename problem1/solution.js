function solution(array, commands) {
  let answer = [];
  for(let i = 0; i < commands.length; i++) {
    let start = commands[i][0];
    let end = commands[i][1];
    let nth = commands[i][2];

    let newArr = array.slice(start-1, end).sort( (a,b) => a-b );
    answer.push(newArr[nth-1]);
  }

  return answer;
}

// 개선방안
function solution(array, commands) {
  return commands.map(obj => {
    return array.slice(obj[0] - 1, obj[1]).sort((a,b) => a - b).slice(obj[2] - 1, obj[2])[0];
  });
}