function solution(n, s, a, b, fares) {
  let answer = Infinity;
  const graph = Array.from({ length: n }, () => new Array(n).fill(Infinity));

  fares.forEach(([c, d, f]) => {
    graph[c - 1][c - 1] = 0;
    graph[d - 1][d - 1] = 0;
    graph[c - 1][d - 1] = f;
    graph[d - 1][c - 1] = f;
  });

  for (let mid = 0; mid < n; mid++) {
    for (let start = 0; start < n; start++) {
      for (let end = 0; end < n; end++) {
        graph[start][end] = Math.min(
          graph[start][end],
          graph[start][mid] + graph[mid][end]
        );
      }
    }
  }

  for (let mid = 0; mid < n; mid++) {
    answer = Math.min(
      answer,
      graph[s - 1][mid] + graph[mid][a - 1] + graph[mid][b - 1]
    );
  }

  return answer;
}
