function solution(n, costs) {
  let answer = 0;
  const parent = Array.from({ length: n }, (_, i) => i);
  costs.sort((a, b) => a[2] - b[2]);

  const getParent = (parent, x) => {
    if (parent[x] === x) return x;
    return (parent[x] = getParent(parent, parent[x]));
  };

  const unionParent = (parent, x, y) => {
    const n1 = getParent(parent, x);
    const n2 = getParent(parent, y);
    if (n1 < n2) return (parent[n2] = n1);
    return (parent[n1] = n2);
  };

  const findParent = (parent, x, y) => {
    const n1 = getParent(parent, x);
    const n2 = getParent(parent, y);
    if (n1 === n2) return true;
    return false;
  };

  costs.forEach(([v1, v2, cost]) => {
    if (!findParent(parent, v1, v2)) {
      answer += cost;
      unionParent(parent, v1, v2);
    }
  });
  return answer;
}
