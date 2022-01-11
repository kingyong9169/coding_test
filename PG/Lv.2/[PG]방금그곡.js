function calcMin(time){
    if(time[0].length === 1) return (24 + time[0]) * 60 + time[1];
    else return time[0] * 60 + time[1];
}

function solution(m, musicinfos) {
    const answer = [], musicArr = [];
    
    for(let i = 0 ; i < musicinfos.length ; i++)
        musicArr.push(musicinfos[i].split(","));
    
    for(let i = 0 ; i < musicArr.length ; i++){
        const time1 = musicArr[i][0].split(':').map((x) => parseInt(x)), 
              time2 = musicArr[i][1].split(':').map((x) => parseInt(x));
        const interval = calcMin(time2) - calcMin(time1);
        const str = musicArr[i][3].match(/\w#|\w/g);
        const rest = interval - str.length;
        
        musicArr[i][1] = interval;
        
        if(str.length > interval) musicArr[i][3] = musicArr[i][3].slice(0, rest);
        
        for(let j = 0, k = 0 ; j < rest ; j++, k++){
            musicArr[i][3] += str[k];
            if(k === str.length - 1) k = -1;
        }
    }
    
    for(let i = 0 ; i < musicArr.length ; i++){
        const reg = new RegExp((m + "#") + "|" + m, "g");
        const matchArr = musicArr[i][3].match(reg);
        if(matchArr && matchArr.includes(m))
            answer.push([musicArr[i][1], musicArr[i][2]]);
    }
    
    answer.sort((a, b) => b[0] - a[0]);
    return answer.length ? answer[0][1] : "(None)";
}