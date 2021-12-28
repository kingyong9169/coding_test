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