function iterateTable(callback) {
  for (let i = 1; i < 51; i++) {
    for (let j = 1; j < 51; j++) {
      callback(i, j);
    }
  }
}

function solution(commands) {
  const answer = [];
  const table = Array.from({ length: 51 }, () => new Array(51).fill(""));
  const parent = Array.from({ length: 51 }, (_, i) =>
    new Array(51).fill().map((x, j) => [i, j])
  );

  function isSameCell(cell1, cell2) {
    return cell1.toString() === cell2.toString();
  }

  function getParent(cell) {
    const [r, c] = cell;
    if (isSameCell(parent[r][c], cell)) return cell;
    return (parent[r][c] = getParent(parent[r][c]));
  }

  function findParent(x, y) {
    const n1 = getParent(x);
    const n2 = getParent(y);
    if (isSameCell(n1, n2)) return true;
    else return false;
  }

  function updateReplace([value1, value2]) {
    iterateTable((i, j) => {
      if (table[i][j] === value1) {
        table[i][j] = value2;
      }
    });
  }

  function update(command) {
    if (command.length === 3) {
      const [r, c, value] = command;
      iterateTable((i, j) => {
        if (findParent([i, j], [r, c])) {
          table[i][j] = value;
        }
      });
    } else {
      updateReplace(command);
    }
  }

  function merge([r1, c1, r2, c2]) {
    if (r1 === r2 && c1 === c2) return;
    const value = table[r1][c1] ? table[r1][c1] : table[r2][c2];
    const cell1 = [r1, c1];
    const cell2 = getParent([r2, c2]);

    iterateTable((i, j) => {
      if (findParent([i, j], cell2)) {
        parent[i][j] = getParent(cell1);
      }
      if (findParent([i, j], cell1)) {
        table[i][j] = value;
      }
    });
  }

  function unmerge([r, c]) {
    const cell = getParent([r, c]);
    const value = table[r][c];

    iterateTable((i, j) => {
      if (findParent([i, j], cell)) {
        parent[i][j] = [i, j];
        table[i][j] = "";
      }
    });
    table[r][c] = value;
  }

  function print([r, c]) {
    return table[r][c] ? table[r][c] : "EMPTY";
  }

  commands.forEach((command) => {
    const [com, ...rest] = command.split(" ");

    switch (com) {
      case "UPDATE":
        update(rest);
        break;
      case "MERGE":
        merge(rest);
        break;
      case "UNMERGE":
        unmerge(rest);
        break;
      case "PRINT":
        answer.push(print(rest));
        break;
    }
  });

  return answer;
}
