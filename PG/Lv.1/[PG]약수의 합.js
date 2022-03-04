function solution(n) {
    let answer = 0;
    for(let i = 1 ; i <= Math.sqrt(n) ; i++) {
        if(!(n % i)) {
            if(i > n / i) break;
            if(i !== n / i)
                answer += n / i;
            answer += i;
        }
    }
    return answer;
}