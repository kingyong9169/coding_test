// 모서리는 모서리 위치에 따라 다르게 처리
// 위, 왼, 아래, 오 로 나눠서 처리

// 안쪽에 있는 것 돌리기
// i는 "Math.min(m, n) / 2"만큼 반복
// j에서 i를 활용하여 안쪽에 있는 사격형 반복

const filePath =
  process.platform === "linux" ? "dev/stdin" : "BOJ/Silver/16926/16926.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [n, m, r] = input[0].split(" ").map(Number);
let matrics = input.slice(1).map((v) => v.split(" ").map(Number));

function rotate(arr) {
  const min = Math.min(n, m);
  const temp = Array.from({ length: n }, () => new Array(m).fill(0));

  for (let i = 0; i < Math.floor(min / 2); i++) {
    for (let j = i; j < m - 1 - i; j++) { // 위
      temp[i][j] = arr[i][j + 1];
    }
    for (let j = i + 1; j < n - i; j++) { // 왼
      temp[j][i] = arr[j - 1][i];
    }
    for (let j = i + 1; j < m - i; j++) { // 아래
      temp[n - 1 - i][j] = arr[n - 1 - i][j - 1];
    }
    for (let j = i; j < n - 1 - i; j++) { // 오
      temp[j][m - 1 - i] = arr[j + 1][m - 1 - i];
    }
  }
  return temp;
}

for (let i = 0; i < r; i++) {
  matrics = rotate(matrics);
}

const matricsStr = matrics.map((row) => row.join(" ")).join("\n");

console.log(matricsStr);
