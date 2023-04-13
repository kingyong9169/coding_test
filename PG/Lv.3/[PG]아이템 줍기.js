const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

function solution(rectangle, characterX, characterY, itemX, itemY) {
  const map = Array.from({ length: 102 }, () => new Array(102).fill(0));
  const doubledRect = rectangle.map((rect) => rect.map((x) => x * 2));
  doubledRect.forEach(([lx, ly, rx, ry]) => {
    for (let i = lx; i <= rx; i++) {
      for (let j = ly; j <= ry; j++) {
        if (i === lx || i === rx || j === ly || j === ry) {
          if (map[i][j] === 0) map[i][j] = 1;
        } else map[i][j] = 2;
      }
    }
  });

  const [cx, cy] = [2 * characterX, 2 * characterY];
  const queue = [[cx, cy, 0]];
  map[cx][cy] = 0;

  while (queue.length) {
    const [x, y, path] = queue.shift();
    if (x === 2 * itemX && y === 2 * itemY) return path / 2;
    for (let i = 0; i < 4; i++) {
      const [moveX, moveY] = [x + dx[i], y + dy[i]];
      if (map[moveX][moveY] === 1) {
        queue.push([moveX, moveY, path + 1]);
        map[moveX][moveY] = 0;
      }
    }
  }
  return 0;
}
