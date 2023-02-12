// 브루트 포스
// 입차, 출차, 입차, 출차 반복되는 경우 주의.

const LAST_TIME = 23 * 60 + 59; // 내 풀이
const IN = "IN";
const OUT = "OUT";
const isCarIn = (history) => history === IN;

function solution(fees, records) {
  const answer = [];
  const [basicTime, basicPrice, unitTime, unitPrice] = fees;
  const recordMap = new Map();

  records.forEach((record) => {
    const [time, carNum, history] = record.split(" ");
    const [hour, min] = time.split(":");
    const isIn = isCarIn(history);
    const curTime = hour * 60 + Number(min);
    if (!recordMap.has(carNum)) {
      recordMap.set(carNum, [curTime, 0, IN]);
    } else {
      const [prevTime, prevParkTime] = recordMap.get(carNum);
      const curParkTime = prevParkTime + (isIn ? 0 : curTime - prevTime);
      const lastHistory = isIn ? IN : OUT;
      recordMap.set(carNum, [curTime, curParkTime, lastHistory]);
    }
  });

  recordMap.forEach((record, carNum) => {
    const [prevTime, time, history] = record;
    const parkingTime = time + (isCarIn(history) ? LAST_TIME - prevTime : 0);
    if (basicTime >= parkingTime) answer.push([carNum, basicPrice]);
    else {
      const overTime = Math.ceil((parkingTime - basicTime) / unitTime);
      answer.push([carNum, basicPrice + overTime * unitPrice]);
    }
  });
  return answer.sort((a, b) => a[0] - b[0]).map(([_, price]) => price);
}

// 다른 사람 풀이
function solution(fees, records) {
  const parkingTime = {};
  records.forEach((r) => {
    let [time, id, type] = r.split(" ");
    let [h, m] = time.split(":");
    time = h * 1 * 60 + m * 1;
    if (!parkingTime[id]) parkingTime[id] = 0;
    if (type === "IN") parkingTime[id] += 1439 - time;
    if (type === "OUT") parkingTime[id] -= 1439 - time;
  });
  const answer = [];
  for (let [car, time] of Object.entries(parkingTime)) {
    if (time <= fees[0]) time = fees[1];
    else time = Math.ceil((time - fees[0]) / fees[2]) * fees[3] + fees[1];
    answer.push([car, time]);
  }
  return answer.sort((a, b) => a[0] - b[0]).map((v) => v[1]);
}
