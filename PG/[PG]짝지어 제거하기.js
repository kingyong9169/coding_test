function solution(s){ // 효율성 1개 통과
    if(s.length % 2 === 1) return 0;
    
    for(let i = 0 ; i < s.length - 1 ; i++){
        if(s[i] === s[i + 1]){
            s = s.slice(0, i) + s.slice(i + 2);
            if(i > 0) i = i - 2;
            else i--;
        }
    }
    
    return s.length ? 0 : 1;
}

function solution(s){
    if(s.length % 2 === 1) return 0;
    
    const stack = [];
    const arr = [...s];
    
    for(let i = 0 ; i < arr.length ; i++){
        if(arr[i] === stack[stack.length - 1]) stack.pop();
        else stack.push(arr[i]);
        if(arr.length - (i + 1) < stack.length) return 0;
    }
    
    return stack.length ? 0 : 1;
}