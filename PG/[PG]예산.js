function solution(d, budget) { // 내 풀이
    let answer = 0;
    let sum = 0;
    d.sort((a, b)=> a-b);
    for(const price of d){
        sum += price;
        if(sum>budget) break;
        answer += 1;
    }
    return answer;
}

function solution(d, budget) { // 다른 사람 풀이
    d.sort((a, b)=>a-b);
    while(d.reduce((a, b)=>(a + b),0)>budget) d.pop();
    return d.length;
}