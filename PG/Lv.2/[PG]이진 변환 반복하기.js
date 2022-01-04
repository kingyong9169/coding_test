function solution(s) {
  let countZero = 0,
    countConvert = 0;
  while (s.length > 1) {
    let result = "";
    let prevDel = s.length;
    s = s.replace(/0/g, "");
    let zeroDel = s.length;
    countZero += prevDel - zeroDel;
    countConvert++;
    while (zeroDel > 0) {
      result = (zeroDel % 2) + result;
      zeroDel /= 2;
      zeroDel = parseInt(zeroDel);
    }
    s = result;
  }
  return [countConvert, countZero];
}
