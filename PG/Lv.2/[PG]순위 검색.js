function getCombination(arr, n){ // 내 풀이
    const result = [];
    if(n === 0) return [[]];
    if(n === 1) return arr.map((x) => [x]);
    
    arr.forEach((cur, idx, origin) => {
        const rest = origin.slice(idx + 1);
        const combination = getCombination(rest, n - 1);
        const attached = combination.map((x) => [cur, ...x]);
        result.push(...attached);
    });
    return result;
}

function lowerBound(target, arr) {
    let low = 0;
    let high = arr.length;
    while (low < high) {
        const mid = Math.floor((high + low) / 2);
        if (arr[mid] >= target) high = mid;
        else low = mid + 1;
    }
    return low;
}

function solution(info, query) {
    const answer = [];
    const conditionObj = {};
    
    query.forEach((x, i) => {
        const queryArr = x.split(/ and | /g);
        query[i] = [queryArr.slice(0, 4).sort().join(""), queryArr[4]];
    });
    
    info.forEach((x, i) => {
        const infoArr = x.split(" ");
        const infoStr = infoArr.slice(0, 4);
        for(let j = 0 ; j <= 4 ; j++){
            const infoSet = getCombination(infoStr, j);
            for(let k = 0 ; k < infoSet.length ; k++){
                const objKey = "-".repeat(4 - j) + infoSet[k].sort().join("");
                if(conditionObj[objKey]) conditionObj[objKey].push(+infoArr[4]);
                else conditionObj[objKey] = [+infoArr[4]];
            }
        }
    });
    
    for(const key in conditionObj) conditionObj[key].sort((a, b) => a - b);
    
    for(let i = 0 ; i < query.length ; i++){
        const score = conditionObj[query[i][0]];
        if(score) answer.push(score.length - lowerBound(query[i][1], score));
        else answer.push(0);
    }
    return answer;
}

function bisect_gt(a, x) { // 다른 사람 풀이
    let lo = 0, hi = a.length;
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (a[mid] < x) lo = mid + 1;
        else hi = mid;
    }
    return a.length - lo;
}

function solution(info, query) {
    const table = {"c": 3, "j": 5, "p": 6, "b": 6, "f": 5, "s": 6, "-": 0};
    const conv = (l, t) => [l.slice(0, -1).reduce((a, k) => (a << 3) + t(table[k[0]]), 0), Number(l[l.length - 1])];
    info = info.map(s => conv(s.split(" "), x => 7 - x));
    query = query.map(s => conv(s.split(" ").filter(c => c != "and"), x => x));
    const map = new Map();
    for (const [k, v] of info) {
        if (!map.has(k)) map.set(k, []);
        map.get(k).push(v);
    }
    const dict = Array.from(map.entries()).map(([k, l]) => [k, l.sort((a, b) => a - b)])
    return query.map(([q, v]) => dict.reduce((a, [k, l]) => a + (k & q ? 0 : bisect_gt(l, v)), 0));
}