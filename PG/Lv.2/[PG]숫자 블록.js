const MAX_NUM = 10000000;

function solution(begin, end) {
  function getGcd(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0 && num / i <= MAX_NUM) return num / i;
    }
    return 1;
  }

  const result = [];
  if (begin === 1) {
    result.push(0);
    begin++;
  }
  for (let i = begin; i <= end; i++) {
    result.push(getGcd(i));
  }
  return result;
}
