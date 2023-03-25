function dfs(tree) {
  const treeLen = tree.length;
  const root = (treeLen - 1) / 2;
  if (!+tree[root] && tree.indexOf("1") !== -1) return false;
  if (treeLen === 1) return true;

  return dfs(tree.slice(0, root)) && dfs(tree.slice(root + 1, treeLen));
}

function getCompleteTree(num) {
  const binaryNum = num.toString(2);
  const numLen = binaryNum.length;
  const h = Math.ceil(Math.log2(numLen + 1));
  const nodeNumOfTree = 2 ** h - 1;
  return "0".repeat(nodeNumOfTree - numLen) + binaryNum;
}

function solution(numbers) {
  return numbers.map((number) => {
    const tree = getCompleteTree(number);
    if (dfs(tree)) return 1;
    else return 0;
  });
}
