const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let arr = [];
rl.on("line", function(x) {
    arr.push(x);
}).on("close", function() {
    const [n, k] = arr[0].split(' ').map(Number);
    arr = arr[1].split(' ').map(Number);
    solution(n, k);
    process.exit();
});

function devide(n, k) {
    let min = arr[n] - arr[0];
    if(k === 1) return min;
    let i = n;
    for( ; i > k - 2 ; i--) {
        const left = arr[i - 1] - arr[0];
        const right = arr[n] - arr[i];
        if(min >= left + right) min = left + right;
        else break;
    }
    const next = devide(i, k - 1);
    return Math.min(next, min);
}

function solution(n, k) {
    console.log(devide(n - 1, k));
}
