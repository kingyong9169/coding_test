function solution(numbers) {
    const answer = [];
    for(let i=0; i<numbers.length; i++){
        for(let j=0; j<numbers.length; j++){
            if(i!==j) answer.push(numbers[i]+numbers[j]);
        }
    }
    answer.sort((a,b)=>a-b);
    return answer.filter((element, index, array)=>array.indexOf(element)===index); // 또는 [...new Set(answer)]
}