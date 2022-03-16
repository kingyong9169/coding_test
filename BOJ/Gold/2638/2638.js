const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Gold/2638/2638.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const graph = input.slice(1).map(x => x.split(' ').map(Number));
const dy = [1, -1, 0, 0], dx = [0, 0, -1, 1];
const queue = [[0, 0]];
const visited = Array.from(new Array(n), () => new Array(m).fill(false));

function aliveCheezes() {
    const cheezes = [];
    graph.forEach((x, i) => {
        x.forEach((v, j) => {
            if(v === 1) cheezes.push([i, j]);
        });
    });
    return cheezes;
}

function bfs() {
    while(queue.length) {
        const [y, x] = queue.shift();
        visited[y][x] = true;
        graph[y][x] = -1;
        for(let i = 0 ; i < 4 ; i++) {
            const ny = y + dy[i], nx = x + dx[i];
            if(ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
            if(!graph[ny][nx] && !visited[ny][nx]) {
                visited[ny][nx] = true;
                graph[ny][nx] = -1;
                queue.push([ny, nx]);
            }
        }
    }
}

function solution() {
    let hour = 0;
    graph[0][0] = -1;

    while(1) {
        const cheezes = aliveCheezes();
        if(!cheezes.length) return hour;
        bfs();

        const outside = [];
        cheezes.forEach(([y, x]) => {
            let outCandidate = 0;
            for(let i = 0 ; i < 4 ; i++) {
                const ny = y + dy[i], nx = x + dx[i];
                if(ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
                if(graph[ny][nx] === -1) outCandidate++;
            }
            if(outCandidate >= 2) outside.push([y, x]);
        });
        queue.push(...outside);
        outside.forEach(([y, x]) => {
            graph[y][x] = 0;
        });
        hour++;
    }
}
console.log(solution());
