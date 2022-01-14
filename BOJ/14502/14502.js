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

function bfs(map, adj){
    const copyAdj = [...adj];
    while(copyAdj.length > 0){
        const [x, y] = copyAdj.shift();
        if(x - 1 >= 0 && map[x - 1][y] === 0){
            map[x - 1][y] = 2;
            copyAdj.push([x - 1, y]);
        }
        if(x + 1 < map.length && map[x + 1][y] === 0){
            map[x + 1][y] = 2;
            copyAdj.push([x + 1, y]);
        } 
        if(y - 1 >= 0 && map[x][y - 1] === 0){
            map[x][y - 1] = 2;
            copyAdj.push([x, y - 1]);
        }
        if(y + 1 < map[0].length && map[x][y + 1] === 0){
            map[x][y + 1] = 2;
            copyAdj.push([x, y + 1]);
        }
    }
}

function solution(labMap, empty, adj){
    let max = 0;
    const walls = getCombination(empty, 3);
    for(let i = 0 ; i < walls.length ; i++){
        let count = 0;
        const copyMap = labMap.map((x) => [...x]);
        walls[i].forEach((cur, idx) => {
            const [x, y] = cur;
            copyMap[x][y] = 1;
        });
        bfs(copyMap, adj);
        copyMap.forEach((x, idx1) => { x.forEach((y, idx2) => { if(!copyMap[idx1][idx2]) count++; }); });
        max = max > count ? max : count;
    }
    console.log(max);
}

let input = require('fs').readFileSync('BOJ/14502/14502.txt').toString().trim().split('\n');
const empty = [], adj = [];
const labMap = input.slice(1).map((x, i) => x.split(' ').map((v, j) => {
    if(!(+v)) empty.push('' + i + j);
    else if(+v === 2) adj.push([i, j]);
    return +v;
}));

solution(labMap, empty, adj);