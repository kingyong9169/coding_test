function solution(play_list, listen_time) {
  const playListLen = play_list.length;
  const sum = play_list.reduce((acc, curr) => acc + curr, 0);
  if (sum <= listen_time) return playListLen;

  let result = 0;
  const copy = play_list.concat(play_list);

  for (let i = 0; i < playListLen; i++) {
    let count = 1;
    let accTime = 1;

    for (let j = i + 1; j < i + playListLen; j++) {
      accTime += copy[j];
      count++;

      if (accTime >= listen_time) {
        result = Math.max(result, count);
        break;
      }
    }
  }
  return result;
}
