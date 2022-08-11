function solution(n) {
  const result = [];

  function hanoi(n, from, to, tmp) {
    if (n === 1) {
      result.push([from, to]); // 1. 마지막 1에 왔을 때 원판 하나를 이동을 시키고,
      return;
    }

    hanoi(n - 1, from, tmp, to); // n-1개를 from -> tmp로 옮기고 to를 tmp로 사용.
    result.push([from, to]); // 2. 1.의 이전 단계를 푸시
    hanoi(n - 1, tmp, to, from); // n-1개를 tmp -> to로 옮기고 from을 tmp로 사용.
  }
  hanoi(n, 1, 3, 2); // n개를 1 -> 3으로 옮길건데 2를 tmp로 사용.
  return result;
}
