const input = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');

input.shift();

const object = input.map((obj) => {
  const age = obj.split(" ")[0];
  const name = obj.split(" ")[1];

  return {
    age: Number(age),
    name,
  };
});

const sortArray = object.sort((a, b) => a.age - b.age);

const result = sortArray.map((obj) => `${obj.age} ${obj.name}`);

console.log(result.join("\n"));
