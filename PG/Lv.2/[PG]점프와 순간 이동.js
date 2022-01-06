function solution(n){
    let k = 0;
    
    while(n > 0){
        if(n % 2 !== 0){
            n--;
            k++;
        }
        else
            n /= 2;
    }
    return k;
}