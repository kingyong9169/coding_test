function binarySearch(list, key) {
  // 맨처음 low = 0, high는 배열의 끝이다.
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = parseInt((high + low) / 2); // mid 값을 계산.

    if (key > list[mid])
      // 키값이 더 크면 왼쪽을 버린다.
      low = mid + 1;
    else if (key < list[mid])
      // 키값이 더 작으면 오른쪽을 버린다.
      high = mid - 1;
    else return mid; // key found
  }
  return -1; // key not found
}
