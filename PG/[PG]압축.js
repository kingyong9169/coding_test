const getDictionary = () => {
  return "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").reduce((acc, cur, index) => {
    acc[cur] = index + 1;
    return acc;
  }, {});
};

function solution(msg) {
  const answer = [];
  const dictionary = getDictionary();
  let curStr = msg[0];
  for (let i = 0; i < msg.length; i++) {
    if (!dictionary[curStr + msg[i + 1]]) {
      dictionary[curStr + msg[i + 1]] = Object.entries(dictionary).length + 1;
      answer.push(dictionary[curStr]);
      curStr = msg[i + 1];
    } else curStr += msg[i + 1];
  }
  return answer;
}
