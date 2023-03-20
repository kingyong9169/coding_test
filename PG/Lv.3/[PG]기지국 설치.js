function calcStationNum(section, spreadDist) {
  // 내 풀이
  return Math.ceil(section / spreadDist);
}

function solution(n, stations, w) {
  let answer = 0;
  const stationLen = stations.length;
  const spreadDist = 1 + 2 * w;

  if (stations[0] !== 1) {
    answer += calcStationNum(stations[0] - (1 + w), spreadDist);
  }

  for (let i = 1; i < stationLen; i++) {
    const curStation = stations[i];
    const prevStation = stations[i - 1];
    const section = curStation - (prevStation + spreadDist);
    answer += calcStationNum(section, spreadDist);
  }
  answer += calcStationNum(n - (stations[stationLen - 1] + w), spreadDist);

  return answer;
}

function solution(n, stations, w) {
  // 다른 사람 풀이
  let answer = 0;
  let startIndex = 0;
  for (let i = 0; i < stations.length; i++) {
    let toReachIndex = stations[i] - w - 1;
    answer += Math.ceil((toReachIndex - startIndex) / (2 * w + 1));
    startIndex = stations[i] + w;
  }
  answer += Math.ceil((n - startIndex) / (2 * w + 1));
  return answer;
}
