function solution(p) {
    let u, v;
    let lparam = 0, rparam = 0;
    if(p === '') return p;
    function separate(elem){
        elem === '(' ? lparam += 1 : rparam += 1;
        return lparam === rparam;
    }
    for(let i = 1; i * 2 <= p.length; i += 1){
        if(p.slice(0, i * 2).split('').some(separate)){
            u = p.slice(0, i * 2);
            v = p.slice(i * 2);
            break;
        }
        lparam = 0;
        rparam = 0;
    }
    if(u[0] === '(' && u[u.length - 1] === ')') return u + solution(v);
    else return '(' + solution(v) + ')' + 
            u.slice(1, u.length -1).replace(/\(|\)/g , a=>a === '(' ? ')' : '(');
    // u.slice(1, u.length - 1).split('').map((elem) => elem === '(' ? ')' : '(').join('');
}