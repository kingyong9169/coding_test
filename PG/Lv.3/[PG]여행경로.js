function solution(tickets) {
    const answer = [];
    const path = {};
    tickets.forEach(([depart, arrival]) => {
        if(path[depart]) path[depart].push(arrival);
        else path[depart] = [arrival];
    });
    for(const key in path) path[key].sort();
    
    function dfs(depart, arr, path) {
        const copyPath = {};
        for(let i = 0 ; i < path[depart].length ; i++) {
            if(answer.length) break;
            
            const x = path[depart][i];
            if(path[x] && path[x].length) {
                Object.keys(path).forEach(x => copyPath[x] = [...path[x]]);
                copyPath[depart].splice(i, 1);
                if(!copyPath[depart].length) delete copyPath[depart];
                dfs(x, [...arr, x], copyPath);
            }
            if(Object.keys(path).length === 1) answer.push(...arr, x);
        }
    }
    
    dfs("ICN", ["ICN"], path);
    return answer;
}