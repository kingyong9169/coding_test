const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Gold/16236/16236.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = input.shift();
let shark = [];
let sharkSize = 2, sizeCount = 0, timeCount = 0;
const eatable = [];
const space = input.map((x, i) => {
    if(x.includes('9')) 
        return x.split(' ')
        .map((v, j) => { 
            if(v === '9') {
                shark = [i, j];
                return 0;
            }
            return +v;
        });
    return x.split(' ').map(Number);
});
const dy = [1 , -1, 0, 0], dx = [0, 0, -1, 1];

function eatableSort() {
    eatable.sort((a, b) => {
        if(a[2] === b[2]) {
            if(a[0] === b[0]) return a[1] - b[1];
            return a[0] - b[0];
        }
        return a[2] - b[2];
    });
    return eatable[0];
}

function bfs(node) {
    const visited = {};
    const queue = [];
    const [i, j] = node;

    visited[`${i},${j}`] = true;
    queue.push([i, j, 0]);

    while(queue.length) {
        const [x, y, dist] = queue.shift();
        if(eatable.length && eatable[0][2] < dist + 1) break;
        for(let i = 0 ; i < 4 ; i++) {
            const ny = x + dy[i], nx = y + dx[i];
            if(ny >= 0 && ny < n && nx >= 0 && nx < n) {
                if(space[ny][nx] <= sharkSize && !visited[`${ny},${nx}`]) {
                    visited[`${ny},${nx}`] = true;
                    if(space[ny][nx] && space[ny][nx] < sharkSize) eatable.push([ny, nx, dist + 1]);
                    queue.push([ny, nx, dist + 1]);
                }
            }
        }
    }
}

while(1) {
    bfs(shark);
    if(!eatable.length) break;
    const [x, y, dist] = eatableSort();
    eatable.length = 0;
    shark = [x, y];
    space[x][y] = 0;
    timeCount += dist;
    sizeCount++;
    if(sizeCount === sharkSize) {
        sharkSize++;
        sizeCount = 0;
    }
}
console.log(timeCount);