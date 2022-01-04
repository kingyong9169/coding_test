function solution(n) {
    const fibonacci = new Array(n + 1).fill(0);
    if(n === 2) return 1;
    fibonacci[1] = fibonacci[2] = 1;
    for(let i = 3 ; i <= n ; i++){
        fibonacci[i] = (fibonacci[i - 1] % 1234567) + (fibonacci[i - 2] % 1234567);
    }
    return fibonacci[n] % 1234567;
}