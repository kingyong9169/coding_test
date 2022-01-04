function solution(number, k) {
    let answer = '';
    let max = -1;
    let idx = -1;
    let digitNum = number.length - k;
    while(k > 0){
        for(let j = 0 ; j < number.length ; j++){
            if(max < +number[j] && number.length - j >= digitNum){
                max = number[j];
                idx = j;
                if(number[j] === '9') break;
            }
        }
        max = -1;
        k -= idx;
        digitNum--;
        answer += number[idx];
        if(digitNum === 0) break;
        number = number.slice(idx + 1, number.length);
    }
    return answer + (digitNum === 0 ? '' : number);
}

function solution(number, k) { // 다른 사람 풀이
    const stack = [];
    for (let i = 0; i<number.length; i++) {
        while (stack[stack.length - 1] < number[i] && k>0) {
            stack.pop();
            k--;
        }
        stack.push(number[i]);
    }
    stack.splice(stack.length-k, k);
    return stack.join('');
}