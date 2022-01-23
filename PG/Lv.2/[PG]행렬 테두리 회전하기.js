function solution(rows, columns, queries) {
    const matrix = Array.from({ length: rows }, (v, i) => Array.from({ length: columns }, (x, j) => i * columns + j + 1));
    const answer = [];
    
    queries.forEach((query) => {
        const [i1, j1, i2, j2] = query.map((v) => v - 1);
        let min = matrix[i1][j1];
        const tmp = matrix[i1][j1];
        
        for(let i = i1 ; i < i2 ; i++){
            matrix[i][j1] = matrix[i + 1][j1];
            min = Math.min(min, matrix[i][j1]);
        }
        for(let j = j1 ; j < j2 ; j++){
            matrix[i2][j] = matrix[i2][j + 1];
            min = Math.min(min, matrix[i2][j]);
        }
        for(let i = i2 ; i > i1 ; i--){
            matrix[i][j2] = matrix[i - 1][j2];
            min = Math.min(min, matrix[i][j2]);
        }
        for(let j = j2 ; j > j1 ; j--){
            matrix[i1][j] = matrix[i1][j - 1];
            min = Math.min(min, matrix[i1][j]);
        }
        matrix[i1][j1 + 1] = tmp;
        answer.push(min);
    });
    
    return answer;
}