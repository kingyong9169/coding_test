const WHITE = 1;

function isMoveRange(x, y, n, m) {
  return x >= 0 && x < n && y >= 0 && y < m;
}

function solution(v) {
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  const n = v.length;
  const m = v[0].length;
  const visited = Array.from({ length: n }, () => Array(n).fill(false));

  let whiteCnt = 0;
  let maxArea = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (v[i][j] === WHITE && !visited[i][j]) {
        whiteCnt++;
        visited[i][j] = true;
        const queue = [[i, j]];
        let area = 1;

        while (queue.length) {
          const [currX, currY] = queue.shift();

          for (let k = 0; k < 4; k++) {
            const [moveX, moveY] = [currX + dx[k], currY + dy[k]];
            if (isMoveRange(moveX, moveY, n, m) && !visited[moveX][moveY]) {
              if (v[moveX][moveY] === WHITE) {
                visited[moveX][moveY] = true;
                queue.push([moveX, moveY]);
                area++;
              }
            }
          }
        }
        maxArea = Math.max(maxArea, area);
      }
    }
  }
  return [whiteCnt, maxArea];
}
