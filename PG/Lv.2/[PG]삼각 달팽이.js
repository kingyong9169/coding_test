function solution(n) {
    let count = 0, row = -1, column = 0;;
    const snail = Array.from({ length: n }, (v, i) => new Array(i + 1));
    
    while(n > 0){
        for(let i = 0 ; i < n ; i++) snail[++row][column] = ++count;
        for(let i = 1 ; i < n ; i++) snail[row][++column] = ++count;
        for(let i = 2 ; i < n ; i++) snail[--row][--column] = ++count;
        n -= 3;
    }
    
    return snail.reduce((acc, cur) => acc.concat(...cur), []);
}