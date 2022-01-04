function solution(v) { // Map을 이용한 처음 내 풀이
    const pos = new Map();
    let x = 0, y = 0;
    for(let i = 0;i < v.length;i++){
        for(let j = 0;j < v[i].length;j++){
            if(pos.has(`${j}` + v[i][j])) pos.set(`${j}` + v[i][j], 2);
            else pos.set(`${j}` + v[i][j], 1);
        }
    }
    for(let p of pos.entries()){
        if(pos.get(p[0]) === 1 && p[0][0] === '0') x = +p[0].slice(1);
        else if(pos.get(p[0]) === 1 && p[0][0] === '1') y = +p[0].slice(1);
    }
    return [x, y];
}

function solution(v) { // 비트마스크
    const answer = new Array(2);
    for(let i = 0;i < v.length;i++){
        answer[0] ^= v[i][0];
        answer[1] ^= v[i][1];
    }
    return answer;
}