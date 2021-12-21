function solution(N, road, K) {
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