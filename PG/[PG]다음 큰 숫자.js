function removeZero(str){ // 내 풀이
    return str.toString(2).replace(/0/g, '').length;
}

function solution(n) {
    const binaryN = removeZero(n);
    while(n++){
        if(binaryN === removeZero(n)) return n;
    }
}

function solution(n, a = n + 1) { // 다른 사람 풀이1
    return n.toString(2).match(/1/g).length === a.toString(2).match(/1/g).length ? a : solution(n, a + 1);
}

function solution(n) { // 다른 사람 풀이 2
    let i, j;
    for (i = 0 ; !(n & 1) ; i++) { n = n >> 1; } // 1을 찾을때까지 우로 쉬프트, 쉬프트 횟수 = i
    for (j = 0 ; n & 1 ; i++, j++) { n = n >> 1; } // 0을 찾을때까지 우로 쉬프트, 1의 갯수 = j
    for (j--, n++ ; i !== j ; i--) { n = n << 1; } // 0자리에 1대입, 1의 갯수 -1, i === j 가 될때까지 죄로 쉬프트하면서 쉬프트 횟수 -1
    for (i ; i ; i--, n++) { n = n << 1; } // i === 0 될때까지 좌로 쉬프트 하면서 쉬프트 횟수 -1, 0자리에 1대입
    return n;
}