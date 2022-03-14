const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/Gold/9084/9084.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let idx = 0;
let t = +input[idx++];

while(t--) {
    const num = +input[idx++];
    const coins = input[idx++].split(' ').map(Number);
    const price = +input[idx++];
    const dp = new Array(price + 1).fill(0);
    dp[0] = 1;
    for(let i = 0 ; i < num ; i++)
        for(let j = coins[i] ; j <= price ; j++)
            dp[j] += dp[j - coins[i]];
    console.log(dp[price]);
}