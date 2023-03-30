function upperBound(array, value) {
  let low = 0;
  let high = array.length;
  while (low < high) {
    const mid = parseInt((high + low) / 2);
    if (value >= array[mid]) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return low;
}
