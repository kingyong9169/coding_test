function solution(s) {
  const answer = [];
  s = s
    .slice(2, s.length - 2)
    .split("},{")
    .map((x) => x.split(",").reduce((acc, cur) => [...acc, +cur], []))
    .sort((a, b) => a.length - b.length);
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      if (!answer.includes(s[i][j])) answer.push(s[i][j]);
    }
  }
  return answer;
}
