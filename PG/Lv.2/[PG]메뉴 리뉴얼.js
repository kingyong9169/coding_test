function getCombination(arr, selectNum){
    const results = [];
    if(selectNum === 1) return arr.map(value=>[value]);
    arr.forEach((element, index, origin)=>{
        const rest = origin.slice(index + 1);
        const combinations = getCombination(rest, selectNum - 1);
        const attached = combinations.map(combination => [element, ...combination]);
        results.push(...attached);
    })
    return results;
}

function solution(orders, course) {
    let answer = [];
    for(let i = 0; i < course.length; i++){
        let max = 0;
        const orderList = new Map();
        for(let j = 0; j < orders.length; j++){
            getCombination(orders[j].split('').sort(), course[i]).forEach(cur=>{
                const order = cur.join('');
                if(orderList.has(order)) orderList.set(order, orderList.get(order)+1);
                else orderList.set(order, 1);
                max = Math.max(max, orderList.get(order));
            });
        }
        
        for(let [key, value] of orderList){
            if(value >= 2 && value === max) answer.push(key);
        }
    }
    
    return answer.sort();
}