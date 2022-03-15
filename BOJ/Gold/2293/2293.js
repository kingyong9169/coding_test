const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/Gold/2293/2293.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [_, k] = input[0].split(' ').map(Number);
input = input.slice(1).map(Number);
const dp = new Array(k + 1).fill(0);
dp[0] = 1;

for(const coin of input) {
    for(let j = coin ; j <= k ; j++) {
        dp[j] += dp[j - coin];
    }
}
console.log(dp[k])
