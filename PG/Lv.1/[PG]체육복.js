function solution(n, lost, reserve) {
  const result = [];
  lost.sort();
  reserve.sort();
  for (const i of lost) {
    for (const j of reserve) {
      if (j === i) {
        // 여벌을 가져온 학생이 도난 당한 경우
        reserve.splice(reserve.indexOf(j), 1);
        result.push(i);
      }
    }
  }
  for (const i of lost) {
    for (const j of reserve) {
      if (j === i + 1 || j === i - 1) {
        // 여벌을 가져온 학생이 잃어버린 학생보다 1 크거나 같을 경우
        if (result.findIndex((x) => x === i) === -1) {
          reserve.splice(reserve.indexOf(j), 1);
          result.push(i);
        }
      }
    }
  }
  for (let i = 1; i <= n; i++)
    if (
      result.findIndex((x) => x === i) === -1 &&
      lost.findIndex((x) => x === i) === -1
    )
      result.push(i);
  // result에도 없고 lost에도 없으면 푸쉬
  return result.length;
}
