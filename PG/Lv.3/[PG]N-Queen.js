function solution(n) {
    const pos = new Array(n);
    let answer = 0;
    
    function isPromising(x) {
        for(let i = 0 ; i < x ; i++) {
            if(pos[x] === pos[i] || Math.abs(pos[x] - pos[i]) === x - i) 
                return false;
        }
        return true;
    }
    
    function nQueen(x) {
        if(x === n) answer++;
        else {
            for(let i = 0 ; i < n ; i++) {
                pos[x] = i;
                if(isPromising(x)) nQueen(x + 1);
            }
        }
    }
    
    nQueen(0);
    return answer;
}