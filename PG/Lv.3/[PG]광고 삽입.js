function timeSplit(time) {
  const [h, m, s] = time.split(":");
  return h * 3600 + m * 60 + s * 1;
}

function convertTimeUnit(time) {
  return time < 10 ? "0" + time : time;
}

function secondToTime(sec) {
  const h = (sec / 3600) >> 0;
  const m = ((sec / 60) >> 0) % 60;
  const s = sec % 60;
  return `${convertTimeUnit(h)}:${convertTimeUnit(m)}:${convertTimeUnit(s)}`;
}

function solution(play_time, adv_time, logs) {
  if (play_time <= adv_time) return secondToTime(0);

  const playTime = timeSplit(play_time);
  const advTime = timeSplit(adv_time);
  const dp = new Array(playTime).fill(0);

  for (let i = 0; i < logs.length; i++) {
    const [start, end] = logs[i].split("-");
    dp[timeSplit(start)] += 1;
    dp[timeSplit(end)] -= 1;
  }

  for (let i = 1; i < playTime; i++) {
    dp[i] += dp[i - 1];
  }
  for (let i = 1; i < playTime; i++) {
    dp[i] += dp[i - 1];
  }

  let time = 0;
  let sum = dp[advTime - 1];

  for (let i = 0; i + advTime < playTime; i++) {
    if (dp[i + advTime] - dp[i] > sum) {
      sum = dp[i + advTime] - dp[i];
      time = i + 1;
    }
  }

  return secondToTime(time);
}
