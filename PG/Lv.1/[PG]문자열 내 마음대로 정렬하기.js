function solution(strings, n) { // 내 풀이
    return strings.sort((a,b)=>
        a.charCodeAt(n)-b.charCodeAt(n) !== 0 ? a.charCodeAt(n)-b.charCodeAt(n) : 
        a > b ? 1 : -1);
}
function solution2(strings, n) { // 다른 사람 풀이
    return strings.sort((s1, s2) => 
        s1[n] === s2[n] ? s1.localeCompare(s2) : 
        s1[n].localeCompare(s2[n]));
}