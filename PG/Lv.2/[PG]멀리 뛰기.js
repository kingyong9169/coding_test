function solution(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;

  const fibonacci = new Array(n + 1);
  fibonacci[1] = 1;
  fibonacci[2] = 2;

  for (let i = 3; i <= n; i++) {
    fibonacci[i] = (fibonacci[i - 1] + fibonacci[i - 2]) % 1234567;
  }
  return fibonacci[n];
}
