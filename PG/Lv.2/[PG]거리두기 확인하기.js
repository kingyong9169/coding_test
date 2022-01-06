function findP(place, pArr){
    for(let i = 0 ; i < 5 ; i++){
        for(let j = 0 ; j < 5 ; j++){
            if(place[i][j] === "P") pArr.push('' + i + j);
        }
    }
    
    for(const p of pArr.values()){
        for(const q of pArr.values()){
            if(p === q) continue;
            
            const manhattanX = Math.abs(p[0] - q[0]);
            const manhattanY = Math.abs(p[1] - q[1]);
            const middleX = (+p[0]) + (+q[0]);
            const middleY = (+p[1]) + (+q[1]);
            
            if(manhattanX + manhattanY <= 2){
                if(manhattanX + manhattanY === 2){
                    if(middleX % 2 === 1 && (place[p[0]][q[1]] === "O" || place[q[0]][p[1]] === "O")) return 0;
                    if(middleX % 2 === 0 && (place[middleX / 2][middleY / 2] === "O")) return 0;
                }
                else return 0;
            }
        }
    }
    return 1;
}

function solution(places) {
    const pArr = [];
    let answer = [];
    
    for(const place of places){
        answer.push(findP(place, pArr));
        pArr.length = 0;
    }
    return answer;
}