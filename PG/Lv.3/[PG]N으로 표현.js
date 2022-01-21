function solution(N, number) { // 처음 내 풀이
    const arr = Array.from({ length: 8 }, (v, i) => new Set(['1'.repeat(i + 1) * N]));
    
    if(N === number) return 1;

    let min = 2;
    for(let i = 1 ; i < min ; i++){
        for(let j = min - i ; j <= min - i; j++){
            for(const arr1 of arr[i - 1]){
                for(const arr2 of arr[j - 1]){
                    arr[min - 1].add(arr1 + arr2).add(arr1 - arr2).add(arr1 * arr2);
                    if(arr2 !== 0) arr[min - 1].add(parseInt(arr1 / arr2));
                }
            }
        }
        if(arr[min - 1].has(number)) return min;
        if(i === min - 1) {
            min++;
            i = 0;
        }
        if(min > 8) return -1;
    }
}

function solution(N, number) { // 다른 사람 풀이
    const cache = new Array(9).fill(0).map(el => new Set());
    for(let i=1; i<9; i++){
        cache[i].add('1'.repeat(i) * N);
        for (let j=1; j < i; j++) {
            for(const arg1 of cache[j]){
                for(const arg2 of cache[i-j]){
                    cache[i].add(arg1+arg2);
                    cache[i].add(arg1-arg2);
                    cache[i].add(arg1*arg2);
                    cache[i].add(arg1/arg2>>0);
                }
            }
        }
        if(cache[i].has(number)) return i; 
    }
    return -1;
}