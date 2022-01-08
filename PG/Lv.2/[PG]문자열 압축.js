function solution(s) {
    let answer = s.length;
    if(answer === 1) return 1;
    for(let i = 1; i <= s.length / 2; i++){
        let substr = s.substring(0, i);
        let nextstr = "";
        let init = s;
        let count = 1;
        for(let j = i; j <= init.length; j += i){
            if(substr === init.substring(j, j + i)){ // 반복 O
                count += 1;
            }
            else{ // 반복 X
                nextstr = init.substring(j, j + i);
                if(count !== 1){
                    const change = count + substr;
                    const nextj = j - count * i;
                    init = init.slice(0, nextj) + change + init.slice(j);
                    j = nextj + change.length;
                    count = 1;
                }
                substr = nextstr;
            }
        }
        answer = Math.min(answer, init.length);
    }
    return answer;
}