function solution(n) { // 처음 내 풀이
    let isPrevZero = false;
    let nextNum = '';
    n = n.toString(3);
    for(let i = n.length - 1 ; i >= 0 ; i--){
        if(isPrevZero){
            if(n[i] == 0) nextNum = '2';
            else if(n[i] == 1) nextNum = '4'
            if(n[i] == 2 || i === 0){
                nextNum = Number(n[i]) - 1 + '';
                isPrevZero = false;
            }
            n = n.slice(0, i) + nextNum + n.slice(i + 1);
            continue;
        }
        if(n[i] == 0){
            n = n.slice(0, i) + '4' + n.slice(i + 1);
            isPrevZero = true;
        }
        else isPrevZero = false;
    }
    
    return Number(n) + '';
}

function solution(n){ // 다른 사람 풀이
    return change124(n);
}

function change124(n) {
    return n === 0 ? '' : change124(parseInt((n - 1) / 3)) + [4, 1, 2][n % 3];
  }