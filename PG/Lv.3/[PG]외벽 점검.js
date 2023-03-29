const getPermutation = (arr, n) => {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, origin) => {
    const rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
    const perms = getPermutation(rest, n - 1);
    const attached = perms.map((perm) => [fixed, ...perm]);
    result.push(...attached);
  });

  return result;
};

function solution(n, weak, dist) {
  const weakLen = weak.length;
  const circularWeak = weak.reduce((acc, cur) => [...acc, cur + n], weak);

  dist.sort((a, b) => b - a);

  for (let i = 1; i <= dist.length; i++) {
    const permutations = getPermutation(dist, i);
    for (const perms of permutations) {
      for (let j = 0; j < weak.length; j++) {
        let partialWeak = circularWeak.slice(j, j + weakLen);
        for (const perm of perms) {
          const coverage = partialWeak[0] + perm;
          partialWeak = partialWeak.filter((v) => v > coverage);
          if (!partialWeak.length) return i;
        }
      }
    }
  }

  return -1;
}
