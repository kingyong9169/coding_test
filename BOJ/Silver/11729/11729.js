const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Silver/11729/11729.txt'; // 내 풀이
const k = +require('fs').readFileSync(filePath).toString().trim();
const progress = [];

function hanoi(k, from, to) {
    if(k > 1) hanoi(k - 1, from, 6 - from - to);
    progress.push([from, to]);
    if(k > 1) hanoi(k - 1, 6 - from - to, to);
}

hanoi(k, 1, 3);
console.log(progress.length);
console.log(progress.map(v => v.join(' ')).join('\n'));


const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Silver/11729/11729.txt'; // 다른 사람 풀이
const k = +require('fs').readFileSync(filePath).toString().trim();

function hanoi(k, from, to) {
    let progress = '';
    if(k > 1) progress += hanoi(k - 1, from, 6 - from - to);
    progress += from + ' ' + to + '\n';
    if(k > 1) progress += hanoi(k - 1, 6 - from - to, to);
    return progress;
}

console.log(2 ** k - 1);
console.log(hanoi(k, 1, 3));