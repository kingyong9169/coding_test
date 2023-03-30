function solution(stones, k) { // 내 풀이
  const stonesLen = stones.length;
  let low = 1;
  let high = 200_000_000;
  while (low < high) {
    const mid = parseInt((high + low) / 2);
    let count = 0;

    for (let i = 0; i < stonesLen; i++) {
      if (stones[i] - mid <= 0) count++;
      else count = 0;

      if (count === k) break;
    }
    if (count === k) high = mid;
    else low = mid + 1;
  }
  return low;
}

function solution(stones, k) { // 다른 사람 풀이
  stones.push(Infinity);
  let stack = [{ count: Infinity, idx: -1 }];
  let answer = Infinity;
  for (let i = 0; i < stones.length; i++) {
    const right = { count: stones[i], idx: i };
    while (stack[stack.length - 1].count < right.count) {
      const mid = stack.pop();
      const left = stack[stack.length - 1];
      if (right.idx - left.idx > k) {
        answer = Math.min(answer, mid.count);
      }
    }
    stack.push(right);
  }
  return answer;
}
