function solution(expression) {
    const prior = [
        ['+', '-', '*'],
        ['+', '*', '-'],
        ['-', '*', '+'],
        ['-', '+', '*'],
        ['*', '-', '+'],
        ['*', '+', '-'],
    ];
    const answer = [];
    for(const opSet of prior){
        const set = expression.split(/(\D)/g);
        for(const op of opSet){
            while(set.includes(op)){
                const index = set.indexOf(op);
                let calc = 0;
                if(op === '+') calc = +set[index - 1] + +set[index + 1];
                else if(op === '-') calc = +set[index - 1] - +set[index + 1];
                else if(op === '*') calc = +set[index - 1] * +set[index + 1];
                set.splice(index - 1, 3, calc);
            }
        }
        answer.push(Math.abs(set));
    }
    return Math.max(...answer);
}