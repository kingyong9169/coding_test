function solution(cacheSize, cities) {
    let answer = 0;
    const cache = [];
    
    while(cacheSize !== 0 && cities.length !== 0){
        const city = cities.shift().toLowerCase();
        const idx = cache.findIndex((x)=>(x === city));
        if(idx === -1){
            if(cache.length >= cacheSize) cache.shift();
            answer = answer + 5;
        }
        else{
            cache.splice(idx, 1);
            answer = answer + 1;
        }
        cache.push(city);
    }
    return cacheSize === 0 ? cities.length * 5 : answer;
}