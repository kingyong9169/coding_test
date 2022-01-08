function solution(dartResult) {
    let num = 0;
    let result = [];
    let tmp = 0;
    for(let i = 0; i < dartResult.length; i++) {
        if(dartResult[i] >= 0 && dartResult[i] <= 9) {
            if(dartResult[i] == 1 && dartResult[i+1] == 0) {
                tmp = 10;
                i++;
            }
            else {
                tmp = dartResult[i];
            }
        }
        else if(dartResult[i] === 'S') {
            result.push(tmp);
        }
        else if(dartResult[i] === 'D') {
            result.push(Math.pow(tmp, 2));
        }
        else if(dartResult[i] === 'T'){
            result.push(Math.pow(tmp, 3));
        }
        else if(dartResult[i] == '#') {
           result[result.length-1]*=-1;
        }
        else if(dartResult[i] == '*') {
            result[result.length-1]*=2;
            result[result.length-2]*=2;
        }
    }
    for(let i = 0; i < result.length; i++) {
        num +=Number(result[i]);
    }
    return num;
}