const filePath =
  process.platform === "linux" ? "dev/stdin" : "BOJ/Gold/11054/11054.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const n = +input[0];
const numArr = input[1].split(" ").map(Number);
const ascLength = new Array(n).fill(1),
  descLength = new Array(n).fill(1);

for (i = 1; i < n; i++) {
  // 오름차순으로 LIS 구하기
  for (j = 0; j < i; j++) {
    if (numArr[j] < numArr[i])
      ascLength[i] = Math.max(ascLength[i], ascLength[j] + 1);
  }
}

for (i = n - 2; i >= 0; i--) {
  // 내림차순으로 LIS구하기
  for (j = i + 1; j < n; j++) {
    if (numArr[j] < numArr[i])
      descLength[i] = Math.max(descLength[i], descLength[j] + 1);
  }
}
console.log(Math.max(...ascLength.map((x, idx) => x + descLength[idx])) - 1);
// 오름차순 + 내림차순 - 1 이 최대값인 지점이 정답
