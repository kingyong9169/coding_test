function solution(brown, yellow) {
  // 내 풀이
  return calcBrown(brown + yellow, yellow);
}

function calcBrown(x, y) {
  for (let i = 1; i <= x; i++)
    if (x % i == 0 && i >= x / i && (i - 2) * (x / i - 2) == y)
      return [i, x / i];
}

function solution2(brown, yellow) {
  // 다른 사람 풀이
  const x = (brown - 12) * 0.5;
  const y = yellow - brown + 8;
  const i = (8 + x + Math.sqrt(Math.pow(x, 2) - 4 * y)) * 0.5;
  const j = (8 + x - Math.sqrt(Math.pow(x, 2) - 4 * y)) * 0.5;
  console.log(i);

  var answer = [i, j];
  return answer;
}
