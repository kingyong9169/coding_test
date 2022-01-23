function score(from, to) {
    if(from === to) return 1;
    else if(from === 0) return 2;
    return Math.abs(to - from) === 2 ? 4 : 3;
}

function dp(left, right, index) {
    const next = input[index];
    const memoization = cache[left][right][index];
    if(!next) return 0;
    if(memoization) return memoization;
    return cache[left][right][index] = Math.min(score(right, next) + dp(left, next, index + 1), score(left, next) + dp(next, right, index + 1));
}

const input = require('fs').readFileSync('BOJ/2342/2342.txt').toString().trim().split(' ').map((x) => parseInt(x));
const cache = Array.from({length : 5}, () => Array.from({length : 5}, () => new Array(input.length)));

console.log(dp(0, 0, 0)); // 세 번째 인자에 arr을 넣으면 버그 발생