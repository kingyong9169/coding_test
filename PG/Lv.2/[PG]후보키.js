function solution(relation) {
  const answer = [];
  const result = [];
  const degree = Array.from({ length: relation[0].length }, (v, i) => i);
  
  for(let i = 0 ; i < relation[0].length ; i++){
      result.push(...getCombination(degree, i + 1));
  }
  
  for(let i = 0 ; i < result.length ; i++){
      const curList = [];
      const candidate = result[i];
      let valid = true;
      
      for(let j = 0 ; j < answer.length ; j++){ // 최소성 검사
          if(answer[j].every((v) => candidate.includes(v))){
              valid = false;
              break;
          }
      }
      
      for(let j = 0 ; valid && j < relation.length ; j++){ // 유일성 검사
          let cur = "";
          for(let k = 0 ; k < result[i].length ; k++)
              cur += relation[j][result[i][k]];
          
          if(curList.includes(cur)) {
              valid = false;
              break;
          }
          curList.push(cur);
      }
      
      if(valid) answer.push(candidate);
  }
  return answer.length;
}

function getCombination(arr, num){
  const result = [];
  if(num === 1) return arr.map((v) => [v]);
  
  arr.forEach((cur, idx, origin) => {
      const rest = origin.slice(idx + 1);
      const combinations = getCombination(rest, num - 1);
      const attached = combinations.map((combination) => [cur, ...combination]);
      result.push(...attached);
  });
  
  return result;
}