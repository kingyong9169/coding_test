const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/Gold/1915/1915.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const square = input.slice(1).map(x => x.split('').map(Number));
const dp = Array.from(new Array(n), () => new Array(m).fill(0));
let max = 0;

for(let i = 0 ; i < n ; i++) {
    for(let j = 0 ; j < m ; j++) {
        if(square[i][j]) {
            if(!i || !j) {
                dp[i][j] = 1;
                max = Math.max(max, dp[i][j]);
                continue;
            }
            dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j - 1], dp[i - 1][j]) + 1;
            max = Math.max(max, dp[i][j]);
        }
    }
}
console.log(max * max);
