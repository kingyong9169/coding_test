function solution(n, edge) { // 처음 내 풀이 : 다익스트라
    const graph = Array.from({ length: n }, () => []);
    const dist = Array.from({ length: n }).fill(Infinity), pq = [[0, 0]];
    edge.forEach(([x, y]) => {
        graph[x - 1].push([y - 1, 1]);
        graph[y - 1].push([x - 1, 1]);
    });
    
    dist[0] = 0;
    
    while(pq.length > 0){
        const [node, weight] = pq.shift();
        for(let i = 0 ; i < graph[node].length ; i++){
            const [nextNode, nextWeight] = graph[node][i];
            const next = weight + nextWeight;
            if(dist[nextNode] > next){
                dist[nextNode] = next;
                pq.push([nextNode, next]);
            }
        }
    }
    
    const max = Math.max(...dist);
    return dist.filter((x) => x === max).length;
}

function solution(n, edges) {
    const adjList = edges.reduce((G, [from, to]) => {
        G[from] = (G[from] || []).concat(to);
        G[to] = (G[to] || []).concat(from);
        return G;
    }, {});

    const queue = [1];
    const visited = {1: true};
    const dist = {1: 0};
    while(queue.length > 0) {
        const node = queue.shift();

        adjList[node].forEach(n => {
            if (!visited[n]) {
                queue.push(n);
                visited[n] = true;
                const d = dist[node] + 1;
                if (!dist[n] || d < dist[n]) dist[n] = d;
            }
        });
    }

    const dists = Object.values(dist);
    const maxDist = Math.max(...dists);
    return dists.filter(d => d === maxDist).length;
}