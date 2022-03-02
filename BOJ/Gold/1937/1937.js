const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/Gold/1937/1937.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = +input.shift();
const graph = input.map(x => x.split(' ').map(Number));
const dp = Array.from(new Array(n), () => new Array(n).fill(1));
const dy = [1, -1, 0, 0], dx = [0, 0, -1, 1];

function dfs(y, x) {
    if(dp[y][x] !== 1) return dp[y][x];
    let max = 0;
    for(let i = 0 ; i < 4 ; i++) {
        const ny = y + dy[i], nx = x + dx[i];
        if(ny < 0 || ny >= n || nx < 0 || ny >= n) continue;
        if(graph[ny][nx] > graph[y][x]) {
            max = Math.max(max, dfs(ny, nx));
        }
    }
    return dp[y][x] += max;
}

function solution() {
    let max = 0;
    for(let i = 0 ; i < n ; i++) {
        for(let j = 0 ; j < n ; j++) {
            max = Math.max(max, dfs(i, j));
        }
    }
    console.log(max);
}

solution();