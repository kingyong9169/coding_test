function solution(n, wires) {
  const map = {};
  let answer = Infinity;
  wires.forEach((wire) => {
    const [v1, v2] = wire;
    if (!map[v1]) map[v1] = [];
    if (!map[v2]) map[v2] = [];
    map[v1].push(v2);
    map[v2].push(v1);
  });

  function bfs(root, exception) {
    let cnt = 0;
    const queue = [root];
    const visited = new Array(n + 1).fill(false);

    while (queue.length) {
      const v = queue.shift();
      visited[v] = true;
      cnt++;
      map[v].forEach((adj) => {
        if (adj !== exception && !visited[adj]) {
          queue.push(adj);
        }
      });
    }
    return cnt;
  }

  wires.forEach((wire) => {
    const [v1, v2] = wire;
    const diff = bfs(v1, v2);
    answer = Math.min(answer, Math.abs(n - 2 * diff));
  });

  return answer;
}
