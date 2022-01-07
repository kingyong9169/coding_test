function solution(numbers) { // 내 풀이 1
    const answer = [];
    
    for(let i = 0 ; i < numbers.length ; i++){
        if(numbers[i] % 2 === 0){
            answer.push(numbers[i] + 1);
            continue;
        }
        const binaryNum = numbers[i].toString(2).split('');
        const lastZero = binaryNum.lastIndexOf("0");
        if(binaryNum.includes("0")){
            binaryNum[lastZero] = "1";
            binaryNum[lastZero + 1] = "0";
        }
        else{
            binaryNum.unshift("1");
            binaryNum[1] = "0";
        }
        answer.push(parseInt(binaryNum.join(""), 2));
    }
    
    return answer;
}

function solution(numbers) { // 내 풀이 2
    const answer = [];
    
    for(let i = 0 ; i < numbers.length ; i++){
        if(numbers[i] % 2 === 0){
            answer.push(numbers[i] + 1);
            continue;
        }
        const binaryNum = ("0" + numbers[i].toString(2)).split('');
        for (let i = binaryNum.length - 1; i >= 0; i--) {
            if (binaryNum[i] === "1") continue;
            binaryNum[i] = "1";
            binaryNum[i + 1] = "0";
            break;
        }
        answer.push(parseInt(binaryNum.join(""), 2));
    }
    
    return answer;
}

function solution(numbers) { // 다른 사람 풀이
    const answer = [];
    numbers.forEach(v => {
        if (v < 2 || v % 2 === 0) {
            answer.push(v+1);
        } else {
            let c = 2;
            while(true) {
                if ((v + 1) % (c * 2) === 0) {
                    c = c * 2;
                } else {
                    break;
                }
            };
            answer.push(v + (c / 2));
        }
    });
    return answer;
}