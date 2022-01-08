function solution(numbers){ // 문자 b+a, a+b 비교해서 가장 큰 경우를 반환하면 끝
    return +numbers.sort((a,b)=>(''+b+a)-(''+a+b)).join('')===0 ? '0' : numbers.join(''); // 양수이면 b가 a보다 먼저 정렬된다.
}

function solution2(numbers) { // 순열로 모든 경우의 수 구하고 join하여 정렬하는 알고리즘 but 런타임 에러 : 최악의 알고리즘
    const num_arr = [];
    getPermutations(numbers, numbers.length).forEach((current, index, origin)=>{
      num_arr.push(current.join(''));
    });
    return +num_arr.sort((a,b)=>a-b)[num_arr.length-1]===0 ? '0' : num_arr[num_arr.length-1];
}

const getPermutations = (arr, selectNumber) =>{
  const results = [];
  if (selectNumber === 1) return arr.map((value) => [value]);
  arr.forEach((current, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index+1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [current, ...permutation]);
    results.push(...attached);
  });
  return results;
};