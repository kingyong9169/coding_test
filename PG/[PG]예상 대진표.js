function solution(n,a,b){
    let count = 0;
    
    while(n > 1){
        count++;
        if((a % 2 === 1 && a + 1 === b) || (b % 2 === 1 && b + 1 === a)) break;
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        n /= 2;
    }

    return count;
}