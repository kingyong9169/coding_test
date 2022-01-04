function solution(m, n, board) {
    const removeSet = new Set();
    let removeCount = 0;
    
    function isEveryEqual(i, j){
        return board[i][j] === board[i + 1][j] && board[i + 1][j] === board[i][j + 1] 
            && board[i][j + 1] === board[i + 1][j + 1];
    }
    
    function searchBlock(){
        for(let i = 0 ; i < m - 1 ; i++){
            for(let j = 0 ; j < n - 1 ; j++){
                if(board[i][j].match(/\w/) && isEveryEqual(i, j))
                    removeSet.add([i, j]).add([i + 1, j]).add([i, j + 1]).add([i + 1, j + 1]);
            }
        }
    }
    
    function removeDuplicated(){
        const itemsFound = {};
        for(const x of [...removeSet]) {
            if(itemsFound[x]) {
                removeSet.delete(x);
                continue;
            }
            itemsFound[x] = true;
            board[x[0]][x[1]] = '';
        }
    }
    
    function putDownFriend(){
        for(let i = 0 ; i < n ; i++){
            let currentPutDown = '';
            for(let j = 0 ; j < m ; j++){
                currentPutDown += board[j][i];
            }
            currentPutDown = currentPutDown.split('');
            while(currentPutDown.length < m){
                currentPutDown.unshift('');
            }
            if(!currentPutDown[0]){
                for(let j = 0 ; j < m ; j++){
                    board[j][i] = currentPutDown[j];
                }
            }
        }
    }
    
    board.forEach((row, i) => board[i] = row.split(''));
    while(true){
        searchBlock();
        if(!removeSet.size) break;
        else {
            removeDuplicated();
            removeCount += removeSet.size;
            putDownFriend();
            removeSet.clear();
        }
    }
    
    return removeCount;
}