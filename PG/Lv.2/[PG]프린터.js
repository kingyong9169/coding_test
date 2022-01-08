function solution(priorities, location) {
    let restPriorities = priorities;
    for(let i=0; i<priorities.length; i++){
        if(restPriorities.findIndex(element=>restPriorities[0]<element)!==-1){
            restPriorities.push(restPriorities.shift());
            location===i ? location = i+restPriorities.length-1 : location -= 1;
            i-=1;
        }
        else{
            if(location===i) return location + 1;
            restPriorities = restPriorities.slice(1);
        }
     }
}

function solution(priorities, location) { // 다른 사람 풀이
    const list = priorities.map((t,i)=>({
        my : i === location,
        val : t
    }));
    let count = 0;
    while(list.length > 0){
        const cur = list.shift();        
        if(list.some(t=> t.val > cur.val )){
            list.push(cur);
        }
        else{
            count++;
            if(cur.my) return count;
        }
    }
}