const filePath =
  process.platform === "linux" ? "dev/stdin" : "BOJ/Silver/1931/1931.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const n = Number(input[0]);
const meetings = input.slice(1).map((e) => e.split(" ").map(Number));

meetings.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let count = 1;
let now = meetings[0][1];

for(let i = 1 ; i < n ; i++) {
  if(now > meetings[i][0]) continue;
  now = meetings[i][1];
  count++;
}

console.log(count);
