function solution(lottos, win_nums) {
    const zeroNum = lottos.filter((zero) => zero === 0).length;
    const success = lottos.filter((correct) => win_nums.includes(correct)).length;
    return [calcRank(success, zeroNum), calcRank(success, 0)];
}

function calcRank(success, zeroNum){
    return success + zeroNum < 2 ? 6 : 7 - (success + zeroNum);
}