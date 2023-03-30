function lowerBound(array, value) {
  let low = 0;
  let high = array.length;
  while (low < high) {
    const mid = parseInt((high + low) / 2);
    if (value <= array[mid]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  return low;
}
