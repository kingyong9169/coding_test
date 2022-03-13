const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/Gold/1744/1744.txt'; // 내 풀이
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const arr = input.slice(1).map(Number);
let sum = 0;

arr.sort((a, b) => a - b);
while(arr.length) {
    const last = arr.length - 1;
    if(arr[last] > 1 && arr[last - 1] > 1) {
        sum += arr.pop() * arr.pop();
    } else if(arr[last] <= -1 && arr[last - 1] <= -1) {
        if(!(arr.length % 2)) sum += arr.pop() * arr.pop();
        else sum += arr.shift() * arr.shift();
    } else if(!arr[last] && arr[last - 1] <= -1) {
        if(!(arr.length % 2)) sum += arr.pop() * arr.pop();
        else arr.pop();
    }
    else sum += arr.pop();
}
console.log(sum);

const [ _, ...numArr ] = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/).map(v => +v); // 다른 사람 풀이
const solve = (arr) => {
  let answer = 0;
  const pos = arr.filter(v => v > 0).sort((a, b) => b - a);
  const neg = arr.filter(v => v <= 0).sort((a, b) => a - b);

  for (i = 0 ; i < pos.length ; i += 2) {
    if (i === pos.length - 1) answer += pos[i];
    else if (pos[i] * pos[i + 1] > pos[i] + pos[i + 1]) {
      answer += pos[i] * pos[i + 1];
    } else {
      answer += pos[i] + pos[i + 1];
    }
  }
  for (i = 0 ; i < neg.length ; i += 2) {
    if (i === neg.length - 1) answer += neg[i];
    else answer += neg[i] * neg[i + 1];
  }
  console.log(answer);
};
solve(numArr);
