function solution(maps) { // 내 풀이
    const m = maps.length - 1, n = maps[0].length - 1;
    const queue = [[0, 0, 1]];
    
    while(queue.length > 0){
        const [x, y, count] = queue.shift();
        if(x === m && y === n) return count;
        
        if(y + 1 <= n && maps[x][y + 1] === 1){
            queue.push([x, y + 1, count + 1]);
            maps[x][y + 1] = 0;
        }
        if(y - 1 >= 0 && maps[x][y - 1] === 1){
            queue.push([x, y - 1, count + 1]);
            maps[x][y - 1] = 0;
        }
        if(x + 1 <= m && maps[x + 1][y] === 1){
            queue.push([x + 1, y, count + 1]);
            maps[x + 1][y] = 0;
        }
        if(x - 1 >= 0 && maps[x - 1][y] === 1){
            queue.push([x - 1, y, count + 1]);
            maps[x - 1][y] = 0;
        }
    }
    return -1;
}

function solution(maps) { // 다른 사람 풀이
    const dy = [1,0,-1,0];
    const dx = [0,1,0,-1];
    const row = maps.length;
    const col = maps[0].length;

    const visitCount = [...maps].map((r) => r.map((c) => 1));

    const queue = [[0,0]];

    while(queue.length) {
        const [y, x] = queue.shift();

        for(let i = 0; i < 4; i++ ) {
            const ny = y + dy[i];
            const nx = x + dx[i];

            if(ny >= 0 && nx >= 0 && ny < row && nx < col) {
                if(maps[ny][nx] === 1 && visitCount[ny][nx] === 1) {
                    visitCount[ny][nx] = visitCount[y][x] + 1;
                    queue.push([ny,nx]);
                }
            }
        }
    }

    return visitCount[row - 1][col - 1] === 1 ? -1 : visitCount[row - 1][col - 1];    
}