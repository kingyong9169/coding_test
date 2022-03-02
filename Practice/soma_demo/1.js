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
  const list = input.split('');
  console.log(fight(list));
  process.exit();
});

function fight(list) {
  const villain = [], ranger = [];
  list.forEach(x => {
    if(x === '(') villain.push(x);
    else ranger.push(x);
  });

  return villain.length === ranger.length ? 'YES' : 'NO';
}