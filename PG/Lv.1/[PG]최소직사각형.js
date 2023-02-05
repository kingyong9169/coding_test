function solution(sizes) {
  let maxSize = [0, 0];

  sizes.forEach(([w, h]) => {
    const [maxWidth, maxHeight] = maxSize;
    const isMoreWidth = w >= h;
    maxSize = [
      Math.max(maxWidth, isMoreWidth ? w : h),
      Math.max(maxHeight, isMoreWidth ? h : w),
    ];
  });

  return maxSize[0] * maxSize[1];
}
