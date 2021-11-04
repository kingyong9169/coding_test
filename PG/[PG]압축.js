const getDictionary = () => {
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce((acc, cur, index) => {
    acc[cur] = index + 1;
    return acc;
  }, {});
};

function solution(msg) {
  const answer = [];
  const dictionary = getDictionary();
  while (msg.length >= 1) {
    let curStr = "";
    for (let i = 0; i < msg.length; i++) {
      curStr += msg[i];
      if (dictionary[curStr] === undefined) {
        curStr = curStr.slice(0, curStr.length - 1);
        break;
      }
    }
    if (dictionary[curStr] !== undefined) {
      answer.push(dictionary[curStr]);
      msg = msg.slice(curStr.length);
    }
    if (msg.length >= 1) {
      curStr = curStr + msg[0];
      if (dictionary[curStr] === undefined)
        dictionary[curStr] = Object.entries(dictionary).length + 1;
    }
  }
  return answer;
}
