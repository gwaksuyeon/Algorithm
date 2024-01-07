const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
input.shift();

const endTimeSort = input.sort((a, b) => {
  const aStartTime = Number(a.split(" ")[0]);
  const aEndTime = Number(a.split(" ")[1]);
  const bStartTime = Number(b.split(" ")[0]);
  const bEndTime = Number(b.split(" ")[1]);

  if (aEndTime === bEndTime) {
    return aStartTime - bStartTime;
  }

  return aEndTime - bEndTime;
});

let recentEndTime = 0;
let result = 0;
endTimeSort.forEach((obj) => {
  const startTime = Number(obj.split(" ")[0]);
  const endTime = Number(obj.split(" ")[1]);

  if (startTime >= recentEndTime) {
    result++;
    recentEndTime = endTime;
  }
});

console.log(result);