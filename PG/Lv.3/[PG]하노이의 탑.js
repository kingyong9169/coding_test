function solution(n) { // 내 풀이
    const answer = [];
    function hanoi(n, x = 1, y = 3) {
        if(n > 1) hanoi(n - 1, x, 6 - x - y);
        answer.push([x, y]);
        if(n > 1) hanoi(n - 1, 6 - x - y, y);
    }
    
    hanoi(n);
    return answer;
}

function solution(n) { // 다른 사람 풀이
    function hanoi(n, from = 1, by = 2, to = 3) {
        return n === 1 ? [[from, to]] : [...hanoi(n-1, from, to, by), ...hanoi(1, from, by, to), ...hanoi(n-1, by, from, to)];
    }
    return hanoi(n);
}