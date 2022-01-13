function solution(num, arr){ // 처음 내 풀이
    const graph = Array.from({ length: num[0] + 1 }, () => []);
    const visited = Array.from({ length: num[0] + 1 }).fill(false);
    for(let i = 0 ; i < arr.length ; i++){
        const [from, to] = arr[i];
        graph[from].push(to);
        graph[to].push(from);
    }

    visited[1] = true;
    dfs(graph[1], graph, visited);
    console.log(visited.filter((x) => x ).length - 1);
}

function dfs(edges, graph, visited){
    edges.forEach((edge) => {
        if(!visited[edge]){
            visited[edge] = true;
            dfs(graph[edge], graph, visited);
        }
    });
}

function solution(num, arr){ // 반복문 풀이
    const graph = Array.from({ length: num[0] + 1 }, () => []);
    const visited = Array.from({ length: num[0] + 1 }).fill(false);
    const pq = [];
    for(let i = 0 ; i < arr.length ; i++){
        const [from, to] = arr[i];
        graph[from].push(to);
        graph[to].push(from);
    }

    visited[1] = true;
    pq.push(1);
    
    while(pq.length){
        const vertex = pq.pop();
        graph[vertex].forEach((edge) => {
            if(!visited[edge]){
                visited[edge] = true;
                pq.push(edge);
            }
        });
    }
    console.log(visited.filter((x) => x ).length - 1);
}

let input = require('fs').readFileSync('BOJ/2606/2606.txt').toString().trim().split('\n');
const num = [parseInt(input[0]), parseInt(input[1])];
const arr = [];

for(let i = 2 ; i < input.length ; i++) arr.push(input[i].split(' ').map((v) => parseInt(v)));

solution(num, arr);