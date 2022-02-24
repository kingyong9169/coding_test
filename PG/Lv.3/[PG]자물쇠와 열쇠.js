function solution(key, lock) {
    const n = lock.length, m = key.length;
    const boardLen = n + 2 * m - 2, nStart = m - 1, nFinish = m - 1 + n;
    const board = Array.from(new Array(boardLen), () => new Array(boardLen).fill(0));
    
    for(let i = nStart ; i < nFinish ; i++)
        for(let j = nStart ; j < nFinish ; j++)
            board[i][j] = lock[i - nStart][j - nStart];
    
    function isLockCorrect(board) {
        for(let i = nStart ; i < nFinish ; i++)
            for(let j = nStart ; j < nFinish ; j++)
                if(!board[i][j]) return false;
        return true;
    }
    
    function rotateKey(idx) {
        const newKey = Array.from(new Array(m), () => new Array(m).fill(0));
        for(let i = 0 ; i < m ; i++) {
            for(let j = 0 ; j < m ; j++) {
                if(!idx) return key;
                else if(idx === 1) newKey[i][j] = key[m - 1 - j][i];
                else if(idx === 2) newKey[i][j] = key[m - 1 - i][m - 1 - j];
                else if(idx === 3) newKey[i][j] = key[j][m - 1 - i];
            }
        }
        return newKey;
    }
    
    for(let r = 0 ; r < 4 ; r++) {
        const newKey = rotateKey(r);
        for(let i = 0 ; i <= boardLen - m ; i++) {
            for(let j = 0 ; j <= boardLen - m ; j++) {
                const newBoard = board.map(x => [...x]);
                for(let k = i ; k < i + m ; k++)
                    for(let l = j ; l < j + m ; l++)
                        newBoard[k][l] ^= newKey[k - i][l - j];
                if(isLockCorrect(newBoard)) return true;
            }
        }
    }
    
    return false;
}