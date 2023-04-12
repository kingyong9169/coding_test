const dx = [0, 0, -1, 1];
const dy = [1, -1, 0, 0];

const isRange = (x, y, n, m) => x >= 0 && x < n && y >= 0 && y < m;

function initPuzzle(puzzle) {
  return puzzle.map(([x, y]) => [x - puzzle[0][0], y - puzzle[0][1]]);
}

function initPuzzles(puzzles) {
  return puzzles.map((puzzle) => initPuzzle(puzzle));
}

function puzzleSort(puzzle) {
  return puzzle.sort(([x, y], [a, b]) => {
    if (a !== x) return x - a;
    return y - b;
  });
}

function getPuzzle(board, find) {
  const boardLen = board.length;
  const visited = Array.from({ length: boardLen }, () =>
    new Array(boardLen).fill(false)
  );
  const puzzles = [];
  for (let i = 0; i < boardLen; i++) {
    for (let j = 0; j < boardLen; j++) {
      const start = board[i][j];
      if (start !== find || visited[i][j]) continue;
      const queue = [],
        puzzle = [];
      queue.push([i, j]);
      puzzle.push([i, j]);
      visited[i][j] = true;
      while (queue.length) {
        const [x, y] = queue.shift();
        for (let k = 0; k < 4; k++) {
          const [nextX, nextY] = [x + dx[k], y + dy[k]];
          if (!isRange(nextX, nextY, boardLen, boardLen)) continue;
          if (board[nextX][nextY] !== find || visited[nextX][nextY]) continue;
          queue.push([nextX, nextY]);
          puzzle.push([nextX, nextY]);
          visited[nextX][nextY] = true;
        }
      }
      if (!puzzle.length) continue;
      const sortedPuzzle = puzzleSort(puzzle);
      puzzles.push(sortedPuzzle);
    }
  }
  return puzzles;
}

function getRotatedPuzzle(puzzle, n) {
  return puzzle.map(([x, y]) => [n - 1 - y, x]);
}

function checkPuzzleSame(space, puzzle) {
  const isSameEveryEl = space.every(
    ([x, y], i) => x === puzzle[i][0] && y === puzzle[i][1]
  );
  return isSameEveryEl;
}

function solution(game_board, table) {
  let answer = 0;
  const emptySpaces = initPuzzles(getPuzzle(game_board, 0));
  const tablePuzzles = getPuzzle(table, 1);
  const findedPuzzles = new Array(tablePuzzles.length).fill(false);
  for (let i = 0; i < emptySpaces.length; i++) {
    const emptySpace = emptySpaces[i];
    for (let j = 0; j < tablePuzzles.length; j++) {
      let curTablePuzzle = tablePuzzles[j];
      if (findedPuzzles[j]) continue;
      if (emptySpace.length !== curTablePuzzle.length) continue;
      for (let k = 0; k < 4; k++) {
        if (k > 0)
          curTablePuzzle = getRotatedPuzzle(curTablePuzzle, game_board.length);
        const sortedPuzzle = puzzleSort(curTablePuzzle);
        const initTablePuzzle = initPuzzle(sortedPuzzle);
        if (!checkPuzzleSame(emptySpace, initTablePuzzle)) continue;
        answer += emptySpace.length;
        findedPuzzles[j] = true;
        break;
      }
      if (findedPuzzles[j]) break;
    }
  }
  return answer;
}
