function solution(arr) {
    const len = arr.length;
    if (arr.every(row => row.every(col => col === 0))) return [1, 0];
    else if (arr.every(row => row.every(col => col === 1))) return [0, 1];
    
    const quad2 = arr.splice(0, len / 2);
    const quad1 = quad2.map((row) => row.splice(0, len / 2));
    const quad4 = arr;
    const quad3 = quad4.map((row) => row.splice(0, len / 2));
    
    return [quad1, quad2, quad3, quad4].reduce((acc, cur) => solution(cur).map((x, i) => x + acc[i]), [0, 0]);
}