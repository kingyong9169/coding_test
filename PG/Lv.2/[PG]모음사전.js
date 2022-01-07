function solution(word) { // 내 풀이
    let answer = 0;
    const interval = [781, 156, 31, 6, 1];
    const wordArr = word.split('');
    const alphaNum = { A: 1, E: 2, I: 3, O: 4, U: 5 };
    
    for(let i = 0 ; i < wordArr.length ; i++){
        if(alphaNum[wordArr[i]] >= 2)
            answer += interval[i] * (alphaNum[wordArr[i]] - 1);
    }
    
    return answer + word.length;
}

function solution(word) { // 다른 사람 풀이
    return word.split('').reduce((r, c, i) => r + [781, 156, 31, 6, 1][i] * ['A', 'E', 'I', 'O', 'U'].indexOf(c) + 1, 0);
}