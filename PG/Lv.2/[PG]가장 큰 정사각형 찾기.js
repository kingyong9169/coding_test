function solution(board){
    let answer = 0;
    let minWidth = 0;
    const rows = board.length;
    const cols = board[0].length;
    
    for(let i = 0 ; i < rows ; i++){
        for(let j = 0 ; j < cols ; j++){
            if(board[i][j] === 1 && (rows || cols) === 1) return 1;
            if(board[i][j] !== 0 && i >= 1 && j >= 1){
                minWidth = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]);
                board[i][j] = minWidth + 1;
                answer = Math.max(board[i][j], answer);
            }
        }
    }
    return answer * answer;
}