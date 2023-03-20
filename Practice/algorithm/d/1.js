function getMin(list, target, last) {
  let start = 0;
  let end = last;

  while (start <= end) {
    const mid = (start + end) / 2;
    if (target < list[mid]) {
      end = mid - 1;
    } else if (target > list[mid]) {
      start = mid + 1;
    }
  }
  return list[start];
}

function solution(n, v) {
  let max = -Infinity;

//   for (let i = 0; i < n - 1; i++) {
//     const sell = v[i];
//     const sortedV = v.slice(i + 1).sort((a, b) => a - b);
//     const minBuy = sortedV[0];
//     max = Math.max(sell - minBuy, max);
//     // const minBuy = getMin(sortedV, sell);
//   }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const sell = v[i];
      const buy = v[j];
      max = Math.max(sell - buy, max);
    }
  }
  return max;
}
