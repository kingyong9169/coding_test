const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/2533/2533.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const graph = Array.from({ length: N }, () => []);
for(let i = 1 ; i < input.length ; i++) {
    // graph[input[i][0] - 1].push(input[i][2] - 1); 이렇게 하면 런타임 에러..
    // graph[input[i][2] - 1].push(input[i][0] - 1);
    const [a, b] = input[i].split(' ').map(Number);
    graph[a - 1].push(b - 1);
    graph[b - 1].push(a - 1);
}
const visited = new Array(N).fill(false);
const early = Array.from({ length: N }, () => [1, 0]);

function dfs(num) {
    visited[num] = true;
    for(const vertex of graph[num]){
        if(!visited[vertex]) {
            dfs(vertex);
            early[num][0] += Math.min(early[vertex][0], early[vertex][1]);
            early[num][1] += early[vertex][0];
        }
    }
}

dfs(0);
console.log(Math.min(early[0][0], early[0][1]));