function solution(stuff) {
    const knapsack = Array.from({ length: N + 1 }, () => new Array(K + 1).fill(0));

    for(let n = 1 ; n <= N ; n++){
        const [w, v] = stuff[n - 1];
        for(let k = 1 ; k <= K ; k++){
            if(k < w) knapsack[n][k] = knapsack[n - 1][k];
            else knapsack[n][k] = Math.max(knapsack[n - 1][k - w] + v, knapsack[n - 1][k]);
        }
    }
    console.log(knapsack[N][K]);
}

const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/12865/12865.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map((x) => +x);
const stuff = input.slice(1).map((x) => x.split(' ').map((v, i) => +v));

solution(stuff);