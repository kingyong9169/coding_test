const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Silver/11653/11653.txt';
let n = +require('fs').readFileSync(filePath).toString().trim();

for(let i = 2 ; i * i <= n ; i++) {
    while(n % i === 0) {
        n /= i;
        console.log(i);
    }
}
if(n > 1) console.log(n);