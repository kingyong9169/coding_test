function solution1(nums) { // Object 사용
    const halfN = nums.length / 2;
    const poketmon = {};
    
    for(const num of nums){
        if(poketmon[num]) poketmon[num]++;
        else poketmon[num] = 1;
    }
    const actualN = Object.entries(poketmon).length;
    
    return actualN >= halfN ? halfN : actualN;
}

function solution(nums) { // Set 사용
    return Math.min(nums.length / 2, [...new Set(nums)].length);
}