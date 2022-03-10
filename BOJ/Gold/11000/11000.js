const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/Gold/11000/11000.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = +input.shift();
const course = input.map(x => x.split(' ').map(Number));
const obj = [];
let classRoom = 0, answer = 0;

for(let i = 0 ; i < n ; i++) {
    obj.push({ time: course[i][0], start: 1 });
    obj.push({ time: course[i][1], start: -1 });
}

obj.sort((a, b) => {
    if(a.time === b.time) return a.start - b.start;
    return a.time - b.time;
});

obj.forEach(x => {
    if(x.start === - 1) classRoom--;
    else classRoom++;
    answer = Math.max(answer, classRoom);
});

console.log(answer);