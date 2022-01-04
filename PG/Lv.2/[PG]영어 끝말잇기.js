function solution(n, words) {
    const wordsObj = {};
    let startChar = "";
    
    for(let i = 0 ; i < words.length ; i++){
        if(wordsObj[words[i]] || words[i].length === 1 || !words[i].startsWith(startChar))
            return [i % n + 1, Math.ceil((i + 1) / n)];
        wordsObj[words[i]] = true;
        startChar = words[i][words[i].length - 1];
    }
    return [0, 0];
}

function solution(n, words) {
    let answer = 0;
    words.reduce((prev, now, idx) => {
        answer = answer || ((words.slice(0, idx).indexOf(now) !== -1 || prev !== now[0]) ? idx : answer);
        return now[now.length-1];
    }, "");

    return answer ? [answer%n+1, Math.floor(answer/n)+1] : [0,0];
}