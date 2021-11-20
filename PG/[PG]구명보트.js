function solution(people, limit) { // 완전 탐색 사용 : 정확성 All solve, 효율성 전부 시간초과
    let start = 0;
    let first = 0, second = 0;
    let max = 0;
    const boat = [];

    while(people.length > 0){
        const boatCandidate = people[first] + (start !== first ? people[start] : 0);
        if(limit >= boatCandidate && max < boatCandidate){
            max = boatCandidate;
            second = start;
        }
        start++;
        if(start === people.length){
            if(second > first){
                boat.push(people.splice(first, 1)[0] + people.splice(second - 1, 1)[0]);
            }
            else boat.push(people.splice(first, 1)[0]);
            start = 0;
            first = 0;
            second = 0;
            max = 0;
        }
    }
    return boat.length;
}


function solution(people, limit) { // 정렬 후 가장 무거운 사람은 혼자 타야한다.
    people.sort(function(a, b){ return a - b });
    let start, last;
    for(start = 0, last = people.length - 1 ; start < last ; last--){
        if(people[start] + people[last] <= limit)
            start++;
    }
    return people.length - start;
}