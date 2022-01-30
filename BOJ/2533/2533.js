function dfs(num) {
    visited[num] = true;
    early[num][0] = 1;
    for(const vertex of graph[num]){
        if(!visited[vertex]) {
            dfs(vertex);
            early[num][0] += Math.min(early[vertex][0], early[vertex][1]); // 본인이 얼리
            early[num][1] += early[vertex][0]; // 본인이 얼리 X
        }
    }
}

function solution() {
    dfs(0);
    console.log(Math.min(early[0][0], early[0][1]));
}

const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/2533/2533.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input.shift();
const graph = Array.from({ length: N }, () => []);
for(const edge of input) {
    graph[edge[0] - 1].push(edge[2] - 1);
    graph[edge[2] - 1].push(edge[0] - 1);
}
const visited = new Array(N).fill(false);
const early = Array.from({ length: N }, () => new Array(2).fill(0));
solution();