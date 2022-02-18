function solution(board) {
    let answer = 0;
    const len = board.length;
    const dy = [-1, 1, 0, 0], dx = [0, 0, -1, 1];
    const notAllowed = [1, 0, 3, 2];
    const dp = Array.from(new Array(len), () => Array.from(new Array(len), () => new Array(4).fill(Infinity)));
    dp[0][0] = [0, 0, 0, 0];
    const check = (y, x) => y >= 0 && y < len && x >= 0 && x < len;
    
    for(let i = 0 ; i < len ; i++) {
        for(let j = 0 ; j < len ; j++) {
            for(let k = 0 ; k < 4 ; k++) {
                for(let h = 0 ; h < 4 ; h++) {
                    let cost = 100;
                    if(check(i + dy[h], j + dx[h]) && board[i + dy[h]][j + dx[h]] === 0) {
                        if(k !== h) cost = 600;
                        dp[i + dy[h]][j + dx[h]][h] = Math.min(dp[i + dy[h]][j + dx[h]][h], dp[i][j][k] + cost);
                        // console.log('min', i + dy[h], j + dx[h], h, k, dp[i + dy[h]][j + dx[h]][h], dp[i][j][k]);
                    }
                }
            }
        }
    }
    console.log(dp[len - 1][len - 1])
    return Math.min(...dp[len - 1][len - 1]);
}