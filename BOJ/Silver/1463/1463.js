const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Silver/1463/1463.txt'; // 정답 풀이 1, 느림
const x = require('fs').readFileSync(filePath).toString().trim().split('\n');
const cache = new Array(+x + 1).fill(0);

for(let i = 2 ; i <= x ; i++) {
    cache[i] = cache[i - 1] + 1;
    if(!(i % 2)) cache[i] = Math.min(cache[i], cache[i / 2] + 1);
    if(!(i % 3)) cache[i] = Math.min(cache[i], cache[i / 3] + 1);
}

console.log(cache[x]);



const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Silver/1463/1463.txt'; // 정답 풀이 2, 빠름
const x = require('fs').readFileSync(filePath).toString().trim().split('\n');
const numSet = new Set();
let count = 0;
let queue = [+x];

function dp(x) {
    while(queue.length) {
        const newQueue = [];
        for(const num of queue) {
            if(num === 1) {
                return count;
            }
            if(!(num % 3) && !numSet.has(num / 3)) {
                newQueue.push(num / 3);
                numSet.add(num / 3);
            }
            if(!(num % 2) && !numSet.has(num / 2)) {
                newQueue.push(num / 2);
                numSet.add(num / 2);
            }
            if(!numSet.has(num - 1)) {
                newQueue.push(num - 1);
                numSet.add(num / 3);
            }
        }
        queue = newQueue;
        count++;
    }
}

console.log(dp(+x));



const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Silver/1463/1463.txt'; // 잘못된 풀이: 메모리 초과
const x = require('fs').readFileSync(filePath).toString().trim().split('\n');
const cache = Array.from({ length: x + 1 }, () => new Array(x + 1).fill(0));
const cache = new Array(x + 1).fill(0);

function dp(x, i) {
    let div3 = 0, div2 = 0, minus = 0;
    if(!x) return Infinity;
    if(x === 1) return 0;

    if(!(x % 3)) div3 = x / 3;
    if(!(x % 2)) div2 = x / 2;
    minus = x - 1;

    if(cache[x][i]) return cache[x][i];
    // if(cache[div2][i]) return cache[div2][i];
    // if(cache[minus][i]) return cache[minus][i];

    return cache[x][i + 1] = Math.min(1 + dp(div3, i + 1), 1 + dp(div2, i + 1), 1 + dp(minus, i + 1));
}

console.log(dp(x, 0));