const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/Gold/1339/1339.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const alphabet = {};
const words = input.slice(1).map(x => x.split(''));
let cur = 9, answer = 0;

words.forEach(x => {
    x.forEach((v, idx) => {
        if(!alphabet[v]) alphabet[v] = 10 ** (x.length - idx - 1);
        else alphabet[v] += 10 ** (x.length - idx - 1);
    });
});

const arr = Object.entries(alphabet).sort((a, b) => b[1] - a[1]);
arr.forEach(([, digit]) => answer += digit * cur--);
console.log(answer);
