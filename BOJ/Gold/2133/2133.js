const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/Gold/2133/2133.txt';
const n = +require('fs').readFileSync(filePath).toString().trim().split('\n');
const dp = new Array(n + 1).fill(0);
dp[0] = 1, dp[2] = 3;

function solution() {
    if(n % 2) {
        console.log(0);
        return;
    }
    for(let i = 4 ; i <= n ; i += 2) {
        dp[i] = dp[i - 2] * 3;
        for(let j = 4 ; j <= i ; j += 2)
            dp[i] += dp[i - j] * 2;
    }
    console.log(dp[n]);
}
solution();
