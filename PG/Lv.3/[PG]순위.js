function checkWinLose(n, i, fight) {
    const win = [], lose = [];
    for(let k = 0 ; k < n ; k++) {
        if(fight[i][k] === -1) lose.push(k);
        else if(fight[i][k] === 1) win.push(k);
    }
    return [win, lose];
}

function solution(n, results) {
    let answer = 0;
    const fight = Array.from({ length: n }, (v, i) => new Array(n).fill(0));
    results.forEach(([x, y]) => {
        fight[x - 1][y - 1] = 1;
        fight[y - 1][x - 1] = -1;
    });
    
    for(let i = 0 ; i < n ; i++) {
        const [win, lose] = checkWinLose(n, i, fight);
        for(const w of win)
            lose.forEach(x => fight[w][x] = -1);
        for(const l of lose)
            win.forEach(x => fight[l][x] = 1);
    }

    for(let i = 0 ; i < n ; i++)
        if(fight[i].filter(x => x).length === n - 1) answer++;
    
    return answer;
}