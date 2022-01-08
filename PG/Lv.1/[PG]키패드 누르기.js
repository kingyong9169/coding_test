function solution(numbers, hand) {
  let answer = "";
  const keyPad = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"],
    ["*", "0", "#"],
  ];
  let leftPos = "*";
  let rightPos = "#";

  for (let number of numbers) {
    if ([1, 4, 7].includes(number)) {
      answer += "L";
      leftPos = number;
    } else if ([3, 6, 9].includes(number)) {
      answer += "R";
      rightPos = number;
    } else {
      const result = whereisNumber(keyPad, number, leftPos, rightPos);
      result === 0
        ? (hand === "right" ? (rightPos = number) : (leftPos = number),
          (answer += hand[0].toUpperCase()))
        : result < 0
        ? ((answer += "L"), (leftPos = number))
        : ((answer += "R"), (rightPos = number));
    }
  }
  return answer;
}

function whereisNumber(list, num, left, right) {
  let Num = [];
  let Left = [];
  let Right = [];

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      if (list[i][j] === "" + num) Num = [i, j];
      if (list[i][j] === "" + left) Left = [i, j];
      if (list[i][j] === "" + right) Right = [i, j];
    }
  }
  function absCalc(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
  }
  return absCalc(Left, Num) - absCalc(Right, Num);
}
