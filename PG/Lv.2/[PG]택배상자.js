function solution(order) {
  // 처음 내 풀이
  let curOrder = 0;
  const sub = [];

  for (let i = 0; i < order.length; i++) {
    const curBox = i + 1;
    if (curBox === order[curOrder]) {
      curOrder++;
    } else {
      sub.push(curBox);
    }
    if (sub[sub.length - 1] === order[curOrder]) {
      sub.pop();
      curOrder++;
    }
  }

  while (sub.length) {
    if (sub[sub.length - 1] !== order[curOrder]) break;
    sub.pop();
    curOrder++;
  }
  return curOrder;
}

function solution(order) {
  // 다른 사람 풀이
  const sub = [];
  let curOrder = 1;
  let count = 0;
  for (let i = 0; i < order.length; i++) {
    let curBox = order[i];
    if (sub.length && sub[sub.length - 1] === curBox) {
      sub.pop();
      count++;
      continue;
    }
    while (curBox !== curOrder) {
      sub.push(curOrder++);
      if (curOrder > order.length) return count;
    }
    curOrder++;
    count++;
  }
  return count;
}
