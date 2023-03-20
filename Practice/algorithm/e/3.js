const MIDNIGHT_MIN_TIME = 24 * 60;
const IMPOSSIBLE = "impossible";

function getStartEndTime(time) {
  return time.split("~");
}

function getMinTime(time) {
  const [h, m] = time.split(":");
  return h * 60 + Number(m);
}

function isStartMoreEnd(startMinTime, endMinTime) {
  return endMinTime < startMinTime;
}

function isOverNextDay(candidateTime, isMoreStart) {
  return isMoreStart && candidateTime.startsWith("0");
}

function solution(noti_time, do_not_disturb) {
  let candidateTime = noti_time;
  const copy = [...do_not_disturb];

  copy.sort((a, b) => {
    const aTime = getMinTime(getStartEndTime(a)[0]);
    const bTime = getMinTime(getStartEndTime(b)[0]);
    return aTime - bTime;
  });

  copy.forEach((time) => {
    const [start, end] = getStartEndTime(time);
    const startMinTime = getMinTime(start);
    let candidateMinTime = getMinTime(candidateTime);
    let endMinTime = getMinTime(end);
    const isMoreStart = isStartMoreEnd(startMinTime, endMinTime);
    const isCandidateOverNextDay = isOverNextDay(candidateTime, isMoreStart);
    if (isCandidateOverNextDay) candidateMinTime += MIDNIGHT_MIN_TIME;
    if (isMoreStart) endMinTime += MIDNIGHT_MIN_TIME;

    if (startMinTime > candidateMinTime || candidateMinTime > endMinTime) {
      candidateTime = candidateTime;
    } else if (candidateMinTime <= endMinTime) {
      candidateTime = end;
    }
  });

  for (let i = 0; i < copy.length; i++) {
    const [start, end] = getStartEndTime(copy[i]);
    const startMinTime = getMinTime(start);
    let candidateMinTime = getMinTime(candidateTime);
    let endMinTime = getMinTime(end);
    const isMoreStart = isStartMoreEnd(startMinTime, endMinTime);
    const isCandidateOverNextDay = isOverNextDay(candidateTime, isMoreStart);
    if (isCandidateOverNextDay) candidateMinTime += MIDNIGHT_MIN_TIME;
    if (isMoreStart) endMinTime += MIDNIGHT_MIN_TIME;

    if (startMinTime <= candidateMinTime && candidateMinTime < endMinTime) {
      return IMPOSSIBLE;
    }
  }

  return candidateTime;
}

// 방해 금지 시간 피해서 푸시 알림
// HH:MM~HH:MM, 24시간 표기법. 시작 시각~끝 시각
// 자정을 넘기는 형태로 설정: 23:05~00:45
// 여러 개 설정 가능, 서로 겹치도록 설정 가능

// 푸시 알림을 보낸 시각이 방해 금지 시간 -> 알림을 보낼 수 있는 시각(방해 금지 시간이 끝나는 시각부터) 중 가장 가까운 시각에 알림을 보내야 함.

// 제한 사항
// 끝 시각이 시작 시각보다 빠르면 자정을 넘기거나 끝 시각이 자정인 경우이다.
// 시작, 끝이 같은 경우는 없음
// 방해 금지 시간이 완전히 일치하는 경우는 없음.
// 시작, 끝 둘 중 하나가 일치하는 경우는 있음.
// 잘못된 시각 없음

// 알림 보내는 것이 불가능하면 impossible return

// 1. 시작 시각 기준으로 정렬
// 2. 조회해서 방해 금지 시간이 끝나는 시점 계산
// 3. 그 시간이 가능한지 검사
// 4. 불가능하면 impossible return
