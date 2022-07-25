const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Silver/5883/5883.txt';
const [n, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
const inputSet = [...new Set(input)];
let result = 0;

for(let i = 0 ; i < inputSet.length ; i++) {
  let count = 0;
  let prev = input[0];
  const capacity = inputSet[i];
  for(let j = 0 ; j < input.length ; j++) {
    if(input[j] === capacity) continue;
    if(input[j] !== prev) {
      count = 1;
    } else {
      count++;
      result = Math.max(result, count);
    }
    prev = input[j];
  }
}

console.log(result);
