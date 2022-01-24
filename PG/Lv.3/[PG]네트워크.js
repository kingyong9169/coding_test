function dfs(i, graph, visited){
    graph[i].forEach((edge) => {
        if(!visited[edge]){
            visited[edge] = true;
            dfs(edge, graph, visited);
        }
    })
}

function solution(n, computers) {
    let network = 0;
    const visited = new Array(n).fill(false);
    const graph = Array.from({ length: n }, () => []);
    
    for(let i = 0 ; i < computers.length ; i++){
        for(let j = 0 ; j < computers[0].length ; j++){
            if(i !== j && computers[i][j]){
                graph[i].push(j);
                graph[j].push(i);
            }
        }
    }
    
    for(let i = 0 ; i < n ; i++){
        if(!visited[i]){
            visited[i] = true;
            dfs(i, graph, visited);
            network++;
        }
    }
    return network;
}