const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Gold/13549/13549.txt';
const [n, k] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const MAX = 100000;
const visited = new Array(MAX + 1).fill(-1);
visited[n] = 0;

function solution(n) {
    const queue = [n];
    let head = 0;
    while(queue.length > head) {
        const num = queue[head++];
        if(num === k) break;
        for(const next of [num * 2, num - 1, num + 1]) {
            if(visited[next] === -1 && next >= 0 && next <= MAX) {
                visited[next] = next === num * 2 ? visited[num] : visited[num] + 1;
                queue.push(next);
            }
        }
    }
    console.log(visited[k]);
}
solution(n);



const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Gold/13549/13549.txt';
const [n, k] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const MAX = 100000;
const time = new Array(MAX + 1).fill(-1);
const queue = [n];
time[n] = 0;

let head = 0;
while(queue.length > head) {
    const idx = queue[head++];
    if(idx === k) break;

    if(idx * 2 >= 0 && idx * 2 <= MAX && time[idx * 2] === -1) {
        time[idx * 2] = time[idx];
        queue.push(idx * 2);
    }
    if(idx - 1 >= 0 && idx - 1 <= MAX && time[idx - 1] === -1) {
        time[idx - 1] = time[idx] + 1;
        queue.push(idx - 1);
    }
    if(idx + 1 >= 0 && idx + 1 <= MAX && time[idx + 1] === -1) {
        time[idx + 1] = time[idx] + 1;
        queue.push(idx + 1);
    }
}
console.log(time[k]);