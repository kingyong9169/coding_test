const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/7579/7579.txt'; // 풀이 1
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const m = input[1].split(' ').map(Number);
const c = input[2].split(' ').map(Number);
const cSum = c.reduce((acc, cur) => acc + cur, 0);
const knapsack = Array.from(new Array(N + 1), () => new Array(cSum + 1).fill(0));

function dp() {
    for(let i = 1 ; i <= N ; i++){
        const cost = c[i - 1], memory = m[i - 1];
        for(let j = 0 ; j <= cSum ; j++){
            if(j < cost) knapsack[i][j] = knapsack[i - 1][j];
            else knapsack[i][j] = Math.max(memory + knapsack[i - 1][j - cost], knapsack[i - 1][j]);
            if(i === N && knapsack[i][j] >= M) return j;
        }
    }
}

console.log(dp());



const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/7579/7579.txt'; // 풀이 2
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const m = input[1].split(' ').map(Number);
const c = input[2].split(' ').map(Number);
const cSum = c.reduce((acc, cur) => acc + cur, 0);
const knapsack = Array.from(new Array(cSum + 1).fill(0));

function dp() {
    for(let i = 1 ; i <= N ; i++){
        const cost = c[i - 1], memory = m[i - 1];
        for(let j = cSum ; j >= cost ; j--){
            knapsack[j] = Math.max(memory + knapsack[j - cost], knapsack[j]);
        }
    }

    let i = 0;
    for(i = 0 ; i <= cSum && knapsack[i] < M ; i++);
    console.log(i);
}

dp();