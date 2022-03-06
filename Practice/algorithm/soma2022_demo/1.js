const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
rl.on("line", function (x) {
  input = x;
  rl.close();
}).on("close", function () {
  console.log(fight(input));
  process.exit();
});

function fight(str) {
  return str.match(/\(/g).length === str.match(/\)/g).length ? 'YES' : 'NO';
}