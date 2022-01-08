function solution(name) {
    let answer = 0;
    let first=[];
    let j=0;
    let minmove=name.length-1;
    for(let i=0; i<name.length;i++){
        first.push('A');
        let diff = name[i].charCodeAt()-first[i].charCodeAt();
        answer+=(diff>13?26-diff:diff);
    }
    for(let i=1;i<name.length;i++){
        if(name[i]==='A'){
            for(j=i+1;j<name.length;j++){
                if(name[j]!=='A')
                    break;
            }
        }
        const left=i-1;
        const right=name.length-j;
        minmove=Math.min(minmove,(left>right?left+2*right:left*2+right));
    }
    answer+=minmove;
    return answer;
}