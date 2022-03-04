const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Silver/2960/2960.txt';
const [n, k] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const prime = new Array(n + 1).fill(1);
let count = 0;
prime[0] = prime[1] = 0;

for(let i = 2 ; i <= n ; i++) {
    if(!prime[i]) continue;
    prime[i] = 0;
    if(++count === k) {
        console.log(i);
        break;
    }
    for(let j = i * i ; j <= n ; j += i) {
        if(prime[j]) {
            prime[j] = 0;
            if(++count === k) {
                console.log(j);
                break;
            }
        }
    }
}
