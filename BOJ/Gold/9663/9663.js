const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/Gold/9663/9663.txt';
let n = +require('fs').readFileSync(filePath).toString().trim().split('\n');
let answer = 0;
const pos = new Array(n);

function isPromising(cur) {
    for(let i = 0 ; i < cur ; i++)
        if(pos[i] === pos[cur] || Math.abs(pos[cur] - pos[i]) === cur - i)
            return false;
    return true;
}

function queen(cur) {
    if(cur === n) answer++;
    else {
        for(let i = 0 ; i < n ; i++) {
            pos[cur] = i;
            if(isPromising(cur)) queen(cur + 1);
        }
    }
}
queen(0);
console.log(answer);
