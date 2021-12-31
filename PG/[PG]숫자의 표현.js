function solution(n) { // 내 풀이
    let answer = 0;
    let total = 0;
    let currentNum = 1, nextNum = 1;
    const max = Math.floor(n);
    
    while(nextNum <= max){
        currentNum = nextNum;
        while(n > total){
            total += (currentNum++);
        }
        nextNum++;
        if(total === n) answer += 1;
        total = 0;
    }
    
    return answer;
}

function solution(n) { // 다른 사람 풀이
    let answer = 0;

    for(let i = 1 ; i <= n ; i++) {
        if (n % i == 0 && i % 2 == 1)
            answer++
    }
    return answer;
}