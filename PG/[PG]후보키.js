function getDegree(num) {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(i);
  }
  return result;
}

function solution(relation) {
  const answer = [];
  const result = [];
  const degree = getDegree(relation[0].length);
  for (let i = 0; i < relation[0].length; i++) {
    result.push(...getCombination(degree, i + 1));
  }
  for (let i = 0; i < result.length; i++) {
    const curList = [];
    for (let j = 0; j < relation.length; j++) {
      let candidate = [];
      let cur = "",
        valid = true;
      for (let k = 0; k < result[i].length; k++) {
        cur += relation[j][result[i][k]];
        candidate += result[i][k];
      }

      if (curList.includes(cur)) break;
      else curList.push(cur);

      for (let l = 0; l < answer.length; l++) {
        if (candidate.includes(answer[l])) {
          valid = false;
          break;
        }
      }

      if (valid && j === relation.length - 1) answer.push(candidate);
    }
  }
  console.log(answer);
  return answer.length;
}

function getCombination(arr, num) {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((cur, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombination(rest, num - 1);
    const attached = combinations.map((combination) => [cur, ...combination]);
    result.push(...attached);
  });

  return result;
}
