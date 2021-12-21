function solution(N, road, K) { // 우선순위 큐
    const dist = new Array(N + 1).fill(Infinity);
    const adj = Array.from({length: N + 1}, () => []);
    const pq = [];
    
    road.forEach(([start, target, time]) => {
        adj[start].push([target, time]);
        adj[target].push([start, time]);
    });
    
    pq.push([1, 0]);
    dist[1] = 0;
    
    while(pq.length !== 0){
        const front = pq.pop();
        const currentNode = front[0];
        const currentTime = front[1];
        
        if(dist[currentNode] < currentTime) continue;
        for(const adjNode of adj[currentNode]){
            const nextNode = adjNode[0];
            const nextTime = currentTime + adjNode[1];
            
            if(nextTime < dist[nextNode]){
                dist[nextNode] = nextTime;
                pq.push([nextNode, nextTime]);
            }
        }
    }

    return dist.filter((time) => time <= K).length;
}

function solution(N, road, K){ // 선형탐색
    const dist = new Array(N);
    const graph = Array.from({length: N}, () => Array(N).fill(Infinity));
    const isVisited = new Array(N).fill(false);
    
    road.forEach(([start, target, time]) => {
        if(graph[start - 1][target - 1] !== Infinity && graph[start - 1][target - 1] < time) return;
        graph[start - 1][target - 1] = time;
        graph[target - 1][start - 1] = time;
    });
    
    dijkstra(N, dist, isVisited, graph);
    return dist.filter((time) => time <= K).length;
}

function getSmallIndex(N, dist, isVisited){
    let minDist = Infinity;
    let minIdx = -1;
    for(let i = 0 ; i < N ; i++){
        if(dist[i] < minDist && !isVisited[i]){
            minDist = dist[i];
            minIdx = i;
        }
    }
    return minIdx;
}

function dijkstra(N, dist, isVisited, graph){
    for(let i = 0 ; i < N ; i++){
        dist[i] = graph[0][i];
    }
    
    dist[0] = 0;
    isVisited[0] = true;
    
    for(let i = 0 ; i < N - 1 ; i++){
        const current = getSmallIndex(N, dist, isVisited);
        isVisited[current] = true;
        for(let j = 0 ; j < N ; j++){
            if(!isVisited[j] && (dist[j] > dist[current] + graph[current][j]))
                dist[j] = dist[current] + graph[current][j];
        }
    }
}