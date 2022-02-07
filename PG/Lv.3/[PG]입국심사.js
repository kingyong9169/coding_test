function solution(n, times) {
    function lowerBound(value) {
        let low = 0;
        let high = Math.max.apply(null, times) * n;
        while(low < high) {
            const time = Math.floor((low + high) / 2); // Math.floor가 parseInt보다 성능이 10배 정도 좋다.
            const cnt = times.reduce((acc, cur) => acc + Math.floor(time / cur), 0);
            if(cnt >= value) high = time;
            else low = time + 1;
        }
        return low;
    }
    
    return lowerBound(n);
}