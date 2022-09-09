function isPrime(num) {
    if (num <= 1) return false;
    for(let i = 2 ; i * i <= num ; i++) {
        if(num % i === 0) return false;
    }
    return true;
}

function solution(n, k) {
    const kNum = n.toString(k);
    const zeroSplittedKNum = kNum.split('0');
    return zeroSplittedKNum.filter(x => isPrime(+x)).length;
}
