// 투 포인터
// 최악의 수: q1에서 모든 원소를 q2에 보내고 q1에서 모든 원소를 q2에 넘기는 경우 -> q길이 * 3
// q1은 최대 len * 2이동, q2는 최대 len 이동 -> len * 3 이동가능
// 어떤 포인터가 queue의 끝에 도달했다는 뜻은 더 이상 이 큐는 잃을게 없다는 뜻.

const sum = (arr) => arr.reduce((acc, cur) => acc + cur, 0);

function solution(queue1, queue2) {
  const qLen = queue1.length;
  const end = qLen * 3;

  let sumQ1 = sum(queue1);
  let sumQ2 = sum(queue2);
  let pointerQ1 = 0;
  let pointerQ2 = qLen;
  const queue = [...queue1, ...queue2];
  const target = (sumQ1 + sumQ2) / 2;

  for (let count = 0; count < end; count++) {
    if (target === sumQ1) return count;
    if (sumQ1 < target) sumQ1 += queue[pointerQ2++];
    else sumQ1 -= queue[pointerQ1++];
  }
  return -1;
}
