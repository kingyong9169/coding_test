function solution(arr1, arr2) {
    const len1 = arr1.length, len2 = arr1[0].length;
    const answer = Array.from(new Array(len1), () => new Array(len2));
    for(let i = 0 ; i < len1 ; i++)
        for(let j = 0 ; j < len2 ; j++)
            answer[i][j] = arr1[i][j] + arr2[i][j];
    return answer;
}