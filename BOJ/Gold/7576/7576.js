const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Gold/7576/7576.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [m, n] = input.shift().split(' ').map(Number);
const tomatoes = [];
const dy = [1, -1, 0, 0], dx = [0, 0, -1, 1];
let time = 0;
const graph = input.map((x, i) => 
    x.split(' ')
    .map((v, j) => {
        if(+v === 1) tomatoes.push([i, j]);
        return +v;
    }));

function checkTomatoes() {
    for(let i = 0 ; i < n ; i++)
        if(graph[i].includes(0)) return false;
    return true;
}

function bfs() {
    let prevIdx = 0;
    if(checkTomatoes()) return 0;
    while(1) {
        const curFinish = tomatoes.length;
        let change = 0;
        for(let i = prevIdx ; i < curFinish ; i++){
            const [y, x] = tomatoes[i];
            for(let j = 0 ; j < 4 ; j++) {
                const [ny, nx] = [y + dy[j], x + dx[j]];
                if(ny < 0 || ny >= n || nx < 0 || nx >= m) continue;
                if(!graph[ny][nx]) {
                    change = 1;
                    graph[ny][nx] = time + 1;
                    tomatoes.push([ny, nx]);
                }
            }
        }
        if(!change) break;
        time++;
        prevIdx = curFinish;
    }
}

bfs();
if(checkTomatoes()) console.log(time);
else console.log(-1);