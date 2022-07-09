const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Silver/11478/11478.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
const strSet = new Set();

for(let i = 0 ; i < input.length ; i++) {
  for(let j = i ; j < input.length ; j++) {
    strSet.add(input.slice(i, j + 1));
  }
}

console.log(strSet.size);
