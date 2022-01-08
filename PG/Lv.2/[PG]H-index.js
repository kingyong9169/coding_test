function solution(citations) { // 정렬 안쓰는 내 풀이
    const LENGTH = citations.length;
    let answer = 0;
    for(let h=0; h < citations[LENGTH - 1]; h++){
        const highThanh = citations.filter((x)=>(x < h)).length;
        if(LENGTH - highThanh >= h) answer = h;
        else break;
    }
    return answer;
}

function solution(citations) { // 정렬 쓰는 내 풀이
    let answer = 0;
    citations.sort((a, b)=>(b - a));
    for(let h=0; h < citations.length; h++){
        if(citations[h] >= h+1) answer += 1;
        else break;
    }
    return answer;
}