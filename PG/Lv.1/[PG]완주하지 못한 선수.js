function solution(participant, completion) {
    const result = participant.reduce((acc, curr) => { 
      acc[curr] = (acc[curr] || 0)+1; 
      return acc;
    }, {})
    for(const x of completion){
        result[x]-=1;
    }
    for(let key in result){
        if(result[key]!==0) return key;
    }
}

function solution2(participant, completion) { //다른 사람 알고리즘
    participant.sort();
    completion.sort();

    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}