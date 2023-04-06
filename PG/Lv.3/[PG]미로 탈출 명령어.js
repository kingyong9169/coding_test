const IMPOSSIBLE = "impossible";

function isMoveRange(x, y, n, m) {
  return x >= 0 && x < n && y >= 0 && y < m;
}

function isArrival(x, y, r, c) {
  return x === r - 1 && y === c - 1;
}

function solution(n, m, x, y, r, c, k) {
  // 내 풀이: DFS + 그리디
  const dist = Math.abs(x - r) + Math.abs(y - c);
  const newK = k - dist;
  if (newK < 0 || newK % 2 === 1) return IMPOSSIBLE;

  const dir = [
    [-1, 0, "u"],
    [0, 1, "r"],
    [0, -1, "l"],
    [1, 0, "d"],
  ];
  const stack = [[x - 1, y - 1, ""]];

  while (stack.length) {
    const [curX, curY, path] = stack.pop();
    if (path.length === k && isArrival(curX, curY, r, c)) return path;
    const remain = k - path.length;
    const shortestDist = Math.abs(curX - (r - 1)) + Math.abs(curY - (c - 1));
    if (remain < shortestDist || remain % 2 !== shortestDist % 2) continue;

    for (let i = 0; i < 4; i++) {
      const [dx, dy, orientation] = dir[i];
      const [moveX, moveY] = [curX + dx, curY + dy];
      if (isMoveRange(moveX, moveY, n, m))
        stack.push([moveX, moveY, path + orientation]);
    }
  }

  return IMPOSSIBLE;
}

// 다른 사람 풀이: https://github.com/Juniork725/coding_test/blob/main/%EB%82%9C%EC%9D%B4%EB%8F%843/%EB%AF%B8%EB%A1%9C%20%ED%83%88%EC%B6%9C%20%EB%AA%85%EB%A0%B9%EC%96%B4.md
