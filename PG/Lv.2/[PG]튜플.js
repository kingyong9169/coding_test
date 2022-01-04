function solution(s) {
  // 더 빠름 : 배열에 숫자가 있는지 확인
  const answer = [];
  s = s
    .slice(2, s.length - 2)
    .split("},{")
    .map((x) => x.split(",").map((v) => +v))
    .sort((a, b) => a.length - b.length);
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      if (!answer.includes(s[i][j])) answer.push(s[i][j]);
    }
  }
  return answer;
}

function solution(s) {
  // 더 느림 : 배열에 문자가 있는지 확인
  const answer = [];
  s = s
    .slice(2, s.length - 2)
    .split("},{")
    .map((x) => x.split(","))
    .sort((a, b) => a.length - b.length);
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      if (!answer.includes(s[i][j])) answer.push(s[i][j]);
    }
  }
  return answer.map((x) => +x);
}
