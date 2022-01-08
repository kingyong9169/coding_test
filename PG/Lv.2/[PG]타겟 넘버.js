function solution(numbers, target) {
    let answer = 0;
    
    function dfs(index, sum){
        if(index===numbers.length){ // 그래프의 최대 depth에 도달하면 
            if(sum===target){ // 만약 sum이 target과 같으면
                answer++; // answer 증가
            }
            return; // 리턴
        }
        dfs(index+1, sum + numbers[index]); // 시작점의 왼쪽은 +
        dfs(index+1, sum - numbers[index]); // 시작점의 오른쪽은 -
    }
    dfs(0,0); // 시작점으로부터 깊이우선탐색
    return answer;
}