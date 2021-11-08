function getCombination(arr, num) {
  const result = [];
  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((cur, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombination(rest, num - 1);
    const attached = combinations.map((combination) => [cur, ...combination]);
    result.push(...attached);
  });

  return result;
}
