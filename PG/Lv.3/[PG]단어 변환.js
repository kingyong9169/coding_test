function solution(begin, target, words) {
    const queue = [];
    const visited = {};
    words.forEach((word) => visited[word] = false);
    if(!words.includes(target)) return 0;
    
    queue.push([begin, 0]);

    while(queue.length > 0){
        const [front, count] = queue.shift();
        if(front === target) return count;
        for(let k = 0 ; k < words.length ; k++){
            const equalChar = words[k].split('').filter((word, idx) => word === front[idx]);
            if(equalChar.length === words[k].length - 1 && !visited[words[k]]){
                visited[words[k]] = true;
                queue.push([words[k], count + 1]);
            }
        }
    }
    
    return 0;
}