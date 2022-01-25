function getCombination(arr, n){
    const result = [];
    if(n === 1) return arr.map((x) => [x]);

    arr.forEach((x, i) => {
        const rest = arr.slice(i + 1);
        const restCombination = getCombination(rest, n - 1);
        restCombination.forEach((v, j) => result.push([x, ...v]));
    });
    return result;
}

function checkBoundary(y, x) {
    return x >= 0 && x < width && y >= 0 && y < height;
}

function bfs(map, adj){
    const copyAdj = [...adj];
    const dx = [1, 0, -1, 0];
    const dy = [0, 1, 0, -1];

    while(copyAdj.length > 0){
        const [x, y] = copyAdj.shift();

        for(let k = 0; k < 4; k++) {
            const nextX = x + dx[k];
            const nextY = y + dy[k];
            if(checkBoundary(nextX, nextY) && !map[nextX][nextY]){
                map[nextX][nextY] = 2;
                copyAdj.push([nextX, nextY]);
            }
        }
    }
}

function solution(labMap, empty, adj){
    let max = 0;
    const walls = getCombination(empty, 3);
    for(let i = 0 ; i < walls.length ; i++){
        let count = 0;
        const copyBoard = labMap.map((x) => [...x]);
        walls[i].forEach((cur, idx) => {
            const [x, y] = cur;
            copyBoard[x][y] = 1;
        });
        bfs(copyBoard, adj);
        copyBoard.forEach((x, idx1) => { x.forEach((y, idx2) => { if(!copyBoard[idx1][idx2]) count++; }); });
        max = Math.max(max, count);
    }
    console.log(max);
}

const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/14502/14502.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const empty = [], adj = [];
const [height, width] = input[0].split(' ').map((v) => +v);
const labMap = input.slice(1).map((x, i) => x.split(' ').map((v, j) => {
    if(!(+v)) empty.push('' + i + j);
    else if(+v === 2) adj.push([i, j]);
    return +v;
}));

solution(labMap, empty, adj);