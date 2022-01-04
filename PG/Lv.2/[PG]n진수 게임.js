function solution(n, t, m, p) {
    let currentNum = 0;
    let concatStr = '';
    const concatArr = [];
    let result = '';
    
    while(concatStr.length < m * t - (m - p)){
        concatStr += (currentNum++).toString(n);
    }
    concatArr.push(...concatStr);
    
    for(let i = 0 ; i < t ; i++){
        result += concatArr[p - 1 + m * i];
    }
    return result.toUpperCase();
}