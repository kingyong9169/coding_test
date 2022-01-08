function solution(board, moves) {
  const answer = [];
  let count = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let sub of board) {
      if (sub[moves[i] - 1] !== 0) {
        answer.push(sub[moves[i] - 1]);
        sub[moves[i] - 1] = 0;
        break;
      }
    }
  }

  for (let i = 0; i < answer.length; i++) {
    if (answer[i] === answer[i + 1]) {
      answer.splice(i, 2);
      count += 2;
      i = -1;
    }
  }

  return count;
}
