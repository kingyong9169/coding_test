function factorialWithMemo(n) {
  const cache = { 0: 1, 1: 1 };
  function factorial(n) {
    if (n <= 1) return 1;
    if (!cache[n - 1]) cache[n - 1] = factorial(n - 1);
    return n * (cache[n - 1] || factorial(n - 1));
  }
  factorial(n);
  return cache;
}

function solution(n, k) {
  const answer = [];
  const cache = factorialWithMemo(n);
  let peopleArr = Array.from({ length: n }, (_, idx) => idx + 1);
  let newK = k;

  for (let newN = n; newN > 0; newN--) {
    const turn = cache[newN - 1];
    const share = parseInt(newK / turn);
    const rest = newK % turn;
    const peopleIdx = !rest && share ? share - 1 : share;
    const frontNum = peopleArr[peopleIdx];
    answer.push(frontNum);
    peopleArr = peopleArr.filter((x) => x !== frontNum);
    newK %= turn;
  }

  return answer;
}
