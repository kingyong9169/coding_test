function solution(genres, plays) { // 내 풀이
    const playList = {};
    const playSum = [], answer = [];
    
    for(let i = 0 ; i < genres.length ; i++) {
        if(playList[genres[i]]) playList[genres[i]].push([i, plays[i]]);
        else playList[genres[i]] = [[i, plays[i]]];
    }
    
    for(const genre in playList) {
        playList[genre].sort((a, b) => b[1] - a[1]);
        const sum = playList[genre].reduce((acc, [num, play]) => acc + play, 0);
        playSum.push([genre, sum]);
    }
    
    playSum.sort((a, b) => b[1] - a[1]);
    
    for(const [genre, sum] of playSum) {
        const arr = playList[genre];
        for(let i = 0 ; i < 2 ; i++) {
            if(arr[i]) answer.push(arr[i][0]);
        }
    }
    
    return answer;
}


function solution(genres, plays) { // 다른 사람 풀이
    const dic = {};
    genres.forEach((t,i) => {
        dic[t] = dic[t] ? dic[t] + plays[i] : plays[i];
    });

    const dupDic = {};
    return genres
          .map((t,i) => ({ genre : t, count : plays[i], index : i }))
          .sort((a,b) =>{
               if(a.genre !== b.genre) return dic[b.genre] - dic[a.genre];
               if(a.count !== b.count) return b.count - a.count;
               return a.index - b.index;
           })
           .filter(t =>  {
               if(dupDic[t.genre] >= 2) return false;
               dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
               return true;
            })
           .map(t => t.index);
}