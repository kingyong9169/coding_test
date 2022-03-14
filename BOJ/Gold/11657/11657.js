const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/Gold/11657/11657.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
input = input.slice(1).map(x => x.split(' ').map(Number));
const graph = Array.from(new Array(n), () => []);
const distance = new Array(n).fill(0);

input.forEach(([u, v, d]) => {
    graph[u - 1].push([v - 1, d]);
});

function bellmanFord() {
    for(let i = 1 ; i < n ; i++) distance[i] = Infinity;

    for(let i = 0 ; i < n ; i++) {
        for(let u = 0 ; u < n ; u++) {
            for(const [v, d] of graph[u]) {
                if(distance[u] !== Infinity && distance[v] > distance[u] + d) {
                    if(i === n - 1) {
                        console.log(-1);
                        return;
                    }
                    distance[v] = distance[u] + d;
                }
            }
        }
    }

    distance.forEach((x, i) => {
        if(x === Infinity) console.log(-1);
        else if(i) console.log(x);
    });
}
bellmanFord();
