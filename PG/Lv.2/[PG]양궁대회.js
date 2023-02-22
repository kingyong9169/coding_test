const SCORE_TOTAL_NUM = 11;
const MAX_SCORE = 10;

function calcScore(apeach, lion) {
  return apeach.reduce((acc, cur, i) => {
    const realScore = MAX_SCORE - i;
    if (cur < lion[i]) return acc + realScore;
    else if (!cur && !lion[i]) return acc;
    return acc - realScore;
  }, 0);
}

function solution(n, apeach) {
  let answer = [-1];
  let winScore = 0;

  function dfs(n, lion, idx) {
    if (n === 0) {
      const score = calcScore(apeach, lion);
      if (score > winScore) {
        winScore = score;
        answer = lion;
      }
      return;
    }

    for (let i = idx; i < SCORE_TOTAL_NUM; i++) {
      const realArrowIdx = MAX_SCORE - i;
      const copy = [...lion];
      const apeachArrow = apeach[realArrowIdx];
      if (n > apeachArrow) {
        copy[realArrowIdx] = apeachArrow + 1;
        dfs(n - copy[realArrowIdx], copy, i + 1);
      } else {
        copy[MAX_SCORE] += n;
        dfs(0, copy, i + 1);
      }
    }

    const copy = [...lion];
    copy[MAX_SCORE] += n;
    dfs(0, copy, -1);
  }

  const scoreArr = new Array(11).fill(0);
  dfs(n, scoreArr, 0);
  return answer;
}
