const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Gold/1167/1167.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(v => v.split(' ').map(Number));
const v = +input.shift();
const graph = Array.from(new Array(v + 1), () => []);
let visited = new Array(v + 1).fill(false);
let max = [0, 0];

function dfs(v, w) {
    if (max[1] < w) max = [v, w];
    graph[v].forEach(([nextV, nextW]) => {
        if(!visited[nextV]) {
            visited[nextV] = true;
            dfs(nextV, w + nextW);
        }
    });
}

for(const [v, ...e] of input)
    for(let j = 0 ; j < e.length - 1 ; j += 2)
        graph[v].push([e[j], e[j + 1]]);

visited[1] = true;
dfs(1, 0);

visited = new Array(v + 1).fill(false);
visited[max[0]] = true;
dfs(max[0], 0);

console.log(max[1]);