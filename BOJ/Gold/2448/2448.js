const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Gold/2448/2448.txt'; // 내 풀이
const N = +require('fs').readFileSync(filePath).toString().trim();

const arr = Array.from(new Array(N), () => new Array(2 * N).fill(' '));

function solution(y, x, l) {
    if(l === 3) {
        arr[y][x] = '*'
        arr[y + 1][x - 1] = '*';
        arr[y + 1][x + 1] = '*';
        for(let i = 0 ; i < 5 ; i++) arr[y + 2][x - 2 + i] ='*';
        return;
    }
    
    solution(y, x, l / 2);
    solution(y + l / 2, x - l / 2, l / 2);
    solution(y + l / 2, x + l / 2, l / 2);
}

solution(0, N - 1, N);

for(let i = 0 ; i < N ; i++) console.log(arr[i].join(''));



const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Gold/2448/2448.txt'; // 다른 사람 풀이
const N = +require('fs').readFileSync(filePath).toString().trim();

const top = next => {
  const margin = ' '.repeat((next[0].length + 1) / 2);
  return next.map(v => margin + v + margin);
};

const bottom = next => {
  return next.map(v => v + ' ' + v);
};

const solve = N => {
  if (N === 3) return [ '  *  ', ' * * ', '*****' ];
  const next = solve(N / 2);
  return [ ...top(next), ...bottom(next) ];
};

console.log(solve(N).join('\n'));