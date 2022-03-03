const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/14002/14002.txt'; // 내 풀이
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = +input.shift();
const arr = input[0].split(' ').map(Number);
const dp = new Array(n);
const lis = Array.from(new Array(n), () => []);
let max = 0;

for(let i = 0 ; i < n ; i++) {
    dp[i] = 1;
    for(let j = 0 ; j < i ; j++) {
        if(arr[j] < arr[i] && dp[i] < dp[j] + 1) {
            dp[i] = dp[j] + 1;
            lis[i] = [...lis[j]];
        }
    }
    lis[i].push(arr[i]);
    if(dp[max] < dp[i]) max = i;
}

console.log(dp[max]);
console.log(lis[max].join(' '));



const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/14002/14002.txt'; // 다른 사람 풀이
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const len = +input[0], arr = input[1].trim().split(' ').map(Number);
const memo = [1], value = [-1], result = [];
let i, j, count, max = 0, ans = memo[0];

for (i = 1 ; i < len ; i++) {
    count = 1;
    value[i] = -1;
    for (j = i - 1 ; j >= 0 ; j--) {
        if (arr[i] > arr[j]) {
            if (count < 1 + memo[j]) {
                count = 1 + memo[j];
                value[i] = j;
            }
        }
    }
    memo[i] = count;
}

for (i = 0; i < len; i++) {
    if (ans < memo[i]) {
        ans = memo[i];
        max = i;
    }
}

i = max;

while (i >= 0) {
    result.push(arr[i]);
    i = value[i];
}

console.log(result.reverse().join(' '));



const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/14002/14002.txt'; // 다른 사람 풀이
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const a = +input[0];
const arr = input[1].split(" ").map(Number);

function lowerBound(target, list, arr) {
  let left = 0;
  let right = list.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    const index = list[mid];

    if (arr[index] < arr[target]) left = mid + 1;
    else right = mid;
  }

  return left;
}

function solution() {
  const prev = Array(a).fill(-1);
  const list = [0];

  for (let i = 1; i < arr.length; i++) {
    const last = list[list.length - 1];
    const con = arr[last] < arr[i] ? list.length : lowerBound(i, list, arr);

    list[con] = i;
    prev[i] = list[con - 1];
  }

  let index = list[list.length - 1];
  let history = "";

  while (index !== -1) {
    history = `${arr[index]} ${history}`;
    index = prev[index];
  }
  return `${list.length}\n${history}`;
}

console.log(solution());
