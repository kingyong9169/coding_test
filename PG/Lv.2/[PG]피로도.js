function solution(k, dungeons) {
  // 내 풀이 1
  let answer = -1;

  function recursion(k, dungeons, adventurable) {
    for (let i = 0; i < dungeons.length; i++) {
      const [req, use] = dungeons[i];
      if (!req || req > k) continue;
      const copy = [...dungeons].map((dungeon) => [...dungeon]);
      copy[i] = [null, null];
      recursion(k - use, copy, adventurable + 1);
    }
    return (answer = Math.max(answer, adventurable));
  }
  recursion(k, dungeons, 0);
  return answer;
}

function solution(k, dungeons) {
  // 내 풀이 2
  const N = dungeons.length;
  const visited = new Array(N).fill(0);

  function dfs(k, cnt, ans) {
    let max = Math.max(cnt, ans);
    for (let i = 0; i < N; i++) {
      const [req, use] = dungeons[i];
      if (visited[i] || req > k) continue;
      visited[i] = 1;
      max = dfs(k - use, cnt + 1, max);
      visited[i] = 0;
    }
    return max;
  }

  return dfs(k, 0, 0);
}
