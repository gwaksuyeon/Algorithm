function solution(answers) {
    let result = [];
    const list = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    let point = [0, 0, 0];

    for(let i = 0; i<answers.length; i++) {
        if(answers[i] === list[0][i % 5]) {
            point[0]++;
        }
        if(answers[i] === list[1][i % 8]) {
            point[1]++;
        }
        if(answers[i] === list[2][i % 10]) {
            point[2]++;
        }
    }

    const max = Math.max(...point);
    point.forEach((obj, inx) => {
        if (obj === max) {
            result.push(inx+1);
        }
    })

    return result;
}

// 개선 코드
function solution(answers) {
  let result = [];
  const list = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  
  const aScore = answers.filter((obj, inx) => obj === list[0][inx % list[0].length]).length;
  const bScore = answers.filter((obj, inx) => obj === list[1][inx % list[1].length]).length;
  const cScore = answers.filter((obj, inx) => obj === list[2][inx % list[2].length]).length;

  const max = Math.max(aScore, bScore, cScore);

  if (aScore === max) {
    result.push(1);
  }
  if (bScore === max) {
    result.push(2);
  }
  if (cScore === max) {
    result.push(3);
  }

  return result;
}