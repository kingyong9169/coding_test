function solution(N, relation, dirname) {
  const dirRelation = {};
  relation.forEach(([parent, child]) => {
    if (!dirRelation[parent]) dirRelation[parent] = [];
    dirRelation[parent].push(child);
  });

  let result = 0;

  function dfs(parent, path) {
    if (!dirRelation[parent]) {
      result = Math.max(result, path.length + dirname[parent - 1].length + 1);
      return;
    }

    for (const child of dirRelation[parent]) {
      dfs(child, path + "/" + dirname[parent - 1]);
    }
  }

  for (const dir of dirRelation[1]) dfs(dir, "root");
  return result;
}
