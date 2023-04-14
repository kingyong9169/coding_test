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

function getMax(num) {
  if (num === 1) return 0;
  const result = [];
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      result.push(i);
      if (num / i <= num) return num / i;
    }
  }
  return result.length ? result[result.length - 1] : 1;
}

function solution(begin, end) {
  const answer = [];
  for (let i = begin; i <= end; i++) {
    answer.push(getMax(i));
  }
  return answer;
}
