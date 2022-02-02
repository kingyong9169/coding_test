const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/11052/11052.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = +input[0];
const cardPack = input[1].split(' ').map((x) => +x);

const DP = [0, ...cardPack];

for(let i = 1 ; i < N ; i++) {
    for(let j = N - i ; j > 0 ; j--) {
        DP[i + j] = Math.max(DP[i + j], DP[i] + cardPack[j - 1]);
    }
}
console.log(DP[N]);