const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/Gold/1976/1976.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = +input[0];
const m = +input[1];
const graph = input.slice(2, -1).map(x => x.split(' ').map(Number));
const plan = input.pop().split(' ').map(x => x - 1);
const parent = new Array(n);

for(let i = 0 ; i < n ; i++) parent[i] = i;
const getParent = (node) => {
    if(parent[node] === node) return node;
    return parent[node] = getParent(parent[node]);
}
const union = (x, y) => {
    const s1 = getParent(x), s2 = getParent(y);
    if(s1 < s2) parent[s2] = s1;
    else parent[s1] = s2;
}

function solution() {
    for(let i = 0 ; i < n ; i++)
        for(let j = 0 ; j < n ; j++)
            if(graph[i][j]) union(i, j);
    
    for(let i = 0 ; i < m ; i++) {
        if(parent[plan[i + 1]] !== undefined && parent[plan[i]] !== parent[plan[i + 1]]) {
            console.log('NO');
            return;
        }
    }
    console.log('YES');
}

solution();
