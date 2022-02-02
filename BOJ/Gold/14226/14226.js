function solution(S) { // BFS 풀이
    const queue = [];
    const visited = {};
    let screen = 1, clipBoard = 1;

    queue.push([screen, clipBoard, 1]);

    while(queue.length > 0){
        const [s, c, count] = queue.shift();
        if(s === S) return count;
        if(s && !visited['' + s + s]) {
            queue.push([s, s, count + 1]);
            visited['' + s + s] = true;
        }
        if((s + c) && !visited['' + (s + c) + c]) {
            queue.push([s + c, c, count + 1]);
            visited['' + (s + c) + c] = true;
        }
        if((s - 1) && !visited['' + (s - 1) + c]) {
            queue.push([s - 1, c, count + 1]);
            visited['' + (s - 1) + c] = true;
        }
    }
}

const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/14226/14226.txt';
const input = +require('fs').readFileSync(filePath);

console.log(solution(input));