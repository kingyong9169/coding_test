function solution(n, arr1, arr2) {
    let answer = [];
    arr1 = changeDecimal(arr1);
    arr2 = changeDecimal(arr2);
    for (let i = 0; i < n; i++) {
      answer.push("" + (arr1[i] + arr2[i]));
    }
    answer = answer.map(function (x) {
      if (x.length !== n) x = "0".repeat(n - x.length) + x;
      x = x.replace(/1|2/g, "#").replace(/0/g, " ");
      return x;
    });
    return answer;
  }
  
  const changeDecimal = (array) => {
    return array.map((x) => +x.toString(2));
  };
  