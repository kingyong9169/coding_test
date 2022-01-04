function solution(s) {
  const params = [];
  if (s[0] === ")" || s[s.length - 1] === "(") return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") params.push("(");
    else if (s[i] === ")" && params[params.length - 1] === "(") params.pop();
    else params.push(")");
  }
  return params.length === 0 ? true : false;
}
