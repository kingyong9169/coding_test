function solution(s) {
    let answer = 0;
    for(let i = 0;i < s.length;i++){
        if(i !== 0) s = s.slice(1, s.length) + s[0];
        if(s[0] === ']' || s[0] === '}' || s[0] === ')') continue;
        else if(checkParam(s)) answer++;
    }
    return answer;
}

function checkParam(p) { // 스택
    p = p.split('');
    const stack = [];
    for(const param of p){
        if(param === '{' || param === '[' || param === '(') stack.push(param);
        else if(param === '}' && stack[stack.length - 1] === '{') stack.pop();
        else if(param === ']' && stack[stack.length - 1] === '[') stack.pop();
        else if(param === ')' && stack[stack.length - 1] === '(') stack.pop();
        else return false;
    }
    return stack.length === 0 ? true : false;
}

// function checkParam(p) { // 무지성 재귀 : 1번 시간 초과
//     if(p === '') return true;
//     if((p[0] === '{' && p[1] === '}') || 
//        (p[0] === '[' && p[1] === ']') || 
//        (p[0] === '(' && p[1] === ')')) return checkParam(p.slice(2, p.length));
//     for(let i = 2;i <= p.length - 2;i += 2){
//         if((p[0] === '{' && p[i + 1] === '}') || 
//            (p[0] === '[' && p[i + 1] === ']') || 
//            (p[0] === '(' && p[i + 1] === ')'))
//             if(checkParam(p.slice(1, i + 1))) return checkParam(p.slice(i + 2, p.length));
//     }
//     return false;
// }