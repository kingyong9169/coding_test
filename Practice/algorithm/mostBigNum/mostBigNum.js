const filePath = process.platform === 'linux' ? 'dev/stdin' : 'Practice/mostBigNum.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = +input.shift();
let num = '';
if(!(n % 2)) {
    num = '1'.repeat(n / 2);
} else {
    num = '1'.repeat((n - 1) / 2 - 1);
    num += '7';
}
console.log(+num);