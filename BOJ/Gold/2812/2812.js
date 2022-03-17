const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Gold/2812/2812.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const num = input[1].split('').map(Number);
let count = k;

function solution() {
    const stack = [];
    
    for(let i = 0 ; i < n ; i++) {
        while(stack.length && count && stack[stack.length - 1] < num[i]) {
            stack.pop();
            count--;
        }
        stack.push(num[i]);
    }
    return stack.slice(0, stack.length - count).join('');
}
console.log(solution());
