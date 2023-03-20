function getLastZeroIdxArr(arr, rows, cols) {
  const lastZeroIdxArr = [];
  for (let i = 0; i < cols; i++) {
    let lastZeroIdx = -1;
    for (let j = 0; j < rows; j++) {
      if (!arr[j][i]) lastZeroIdx = j;
    }
    lastZeroIdxArr.push(lastZeroIdx);
  }
  return lastZeroIdxArr;
}

function solution(histogram) {
  let answer = 1;
  const cols = histogram[0].length;
  const rows = histogram.length;
  const lastZeroIdxArr = getLastZeroIdxArr(histogram, rows, cols);

  for (let i = 0; i < cols; i++) {
    let consecutive2Num = 0;
    const lastZeroIdx = lastZeroIdxArr[i];
    for (let j = lastZeroIdx + 1; j < rows; j++) {
      if (histogram[j][i] === 2) consecutive2Num++;
      if (histogram[j][i] === 1) {
        break;
      }
    }
    answer *= consecutive2Num + 1;
  }
  return answer;
}

// 히스토그램: 너비 1, 높이 0 이상의 정수인 막대그래프들로 구성
// 검은 부분이 손상된 부분, 손상된 부분은 어떤 히스토그램인지 알 수 없음. but 유추 가능

// 막대그래프는 중간이 비어 있을 수 없음.
// 막대 하나마다 경우의 수를 곱하여 게산

// row: 막대그래프의 최대 높이 3 ~ 8
// col: 막대그래프의 수 3 ~ 8
// 0: 비어 있음, 1: 막대그래프가 있는 부분, 2: 히스토그램의 손상된 부분
// 올바른 형태의 히스토그램만 입력으로 주어짐. 00200100 이런 형태는 없음.

// col 별로 끊어서 경우의 수 계산
// 0, 0, 2, 1, 2, 2 일 때, 0 옆부터 계산. 2 옆이 1이기 때문에 2, 1이 나오면 그 다음은 무조건 1 -> 2 * 1
// 0 0 2 0 1 1일 때, 2 옆이 0이기 때문에 1
// -> 0이 없는 시점부터 계산 시작 -> OK
// -> 1 뒤에 2가 나오면 무조건 1 ->
// -> 1이 없으면 2가 연속으로 나온 갯수 + 1
// 경우의 수: 2122, 122, 222
