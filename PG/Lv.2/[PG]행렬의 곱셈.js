function solution(arr1, arr2) { // 처음 내 풀이
    const matrix = Array.from({length: arr1.length}, () => Array(arr2[0].length).fill(null));
    
    for(let i = 0 ; i < arr1.length ; i++){
        for(let j = 0 ; j < arr2[0].length ; j++){
            for(let k = 0 ; k < arr2.length ; k++){
                matrix[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return matrix;
}

function solution(arr1, arr2) { // 다른 사람 풀이
    return arr1.map((row) => arr2[0].map((x,y) => row.reduce((a,b,c) => a + b * arr2[c][y], 0)));
}