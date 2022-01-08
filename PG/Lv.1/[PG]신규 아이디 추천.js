function solution(new_id) {
    let answer = new_id.toLowerCase()
        .replace(/[^\w-_.]/g, '')
        .replace(/\.+/g,'.')
        .replace(/^\.|\.$/,'')
        .replace(/^$/,'a')
        .slice(0, 15).replace(/\.$/,'');
    return answer.length < 3 ? answer + answer[answer.length-1].repeat(3-answer.length) : answer;
}