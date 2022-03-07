const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/Gold/1987/1987.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [r, c] = input.shift().split(' ').map(Number);
const graph = input.map(x => x.split('').map(v => v.charCodeAt(0) - 65));
const dy = [1, -1, 0, 0], dx = [0, 0, -1, 1];
const visited = new Array(26).fill(0);
let max = 1;

function dfs(y, x, count) {
    for(let i = 0 ; i < 4 ; i++) {
        const ny = y + dy[i], nx = x + dx[i];
        if(ny < 0 || ny >= r || nx < 0 || nx >= c) continue;
        if(!visited[graph[ny][nx]]) {
            visited[graph[ny][nx]] = 1;
            max = Math.max(max, count + 1);
            dfs(ny, nx, count + 1);
            visited[graph[ny][nx]] = 0;
        }
    }
}

function solution() {
    visited[graph[0][0]] = 1;
    dfs(0, 0, 1);
    console.log(max);
}

solution();
