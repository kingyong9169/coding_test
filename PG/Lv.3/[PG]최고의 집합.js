function solution(n, s) {
  const div = Math.floor(s / n);
  const rest = s % n;
  const answer = new Array(n).fill(div);

  if (!div) return [-1];

  for (let i = 0; i < rest; i++) {
    answer[answer.length - 1 - i]++;
  }
  return answer;
}
