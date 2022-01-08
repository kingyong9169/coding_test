function solution(record) {
    const nickCollection = {};
    const answer = [];
    record.forEach((cur) => {
        const [state, uid, nick] = cur.split(' ');
        if(state !== 'Change') {
            answer.push({uid, text: state === 'Enter' ? '님이 들어왔습니다.' : '님이 나갔습니다.'});
        }
        if(nick) nickCollection[uid] = nick;
    });
    return answer.map((x)=>(nickCollection[x.uid]+x.text));
}