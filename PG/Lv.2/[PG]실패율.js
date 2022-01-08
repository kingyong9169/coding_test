function solution(N, stages) {
    let answer = [];
    for(let i = 1; i<=N; i++){
        const reach_num = stages.filter(x=>(x>=i));
        const fail_num = stages.filter(x=>(x===i));
        answer.push(fail_num.length/reach_num.length);
    }

    return answer.map((value, i) => ({index: i, prob: value }))
        .sort((a, b) => (b.prob - a.prob))
        .reduce((acc, cur)=>(acc.concat(cur.index + 1)),[]);
}

function solution2(N, stages) { //다른 사람 풀이
    let ans = []

    for (let i = 1; i <= N; ++i) {
        let usersReachedCurrentStage   = stages.reduce((acc, curStage) => acc + ((curStage >= i) ? 1 : 0), 0)
        let usersStagnatedCurrentStage = stages.reduce((acc, curStage) => acc + ((curStage == i) ? 1 : 0), 0)
        if (usersReachedCurrentStage === 0) {
            ans.push({ 'stage': i, 'failRate': 0 })
            continue
        }

        ans.push({ 'stage': i, 'failRate': (usersStagnatedCurrentStage / usersReachedCurrentStage) })
    }

    return ans.sort((a, b) => {
        if (a.failRate > b.failRate) return -1
        if (a.failRate < b.failRate) return 1
        return a.stage - b.stage
    }).map(entry => entry.stage)
}