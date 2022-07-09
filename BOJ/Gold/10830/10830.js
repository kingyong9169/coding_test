const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/Gold/10830/10830.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const matrix = input.slice(1).map(x => x.split(' ').map(y => y % 1000));
const [N, B] = input[0].split(' ').map(Number);
const MOD = 1000;

function recursion(num) {
  if(num === 1) return matrix;

  const cache = recursion(Math.floor(num / 2));

  if(num % 2 === 0) {
    return multiply(cache, cache);
  } else if(num % 2 === 1) {
    return multiply(multiply(cache, cache), matrix);
  }
}

function multiply(mat1, mat2) {
  const result = Array.from({ length: N }, () => new Array(N).fill(0));

  for(let i = 0 ; i < N ; i++) {
    for(let j = 0 ; j < N ; j++) {
      for(let k = 0 ; k < N ; k++) {
        result[i][j] += mat1[i][k] * mat2[k][j];
      }
      result[i][j] %= MOD;
    }
  }

  return result;
}

console.log(recursion(B).map(x => x.join(' ')).join('\n'));
