const max = (arr) => Math.max.apply(null, arr);
const min = (arr) => Math.min.apply(null, arr);

function solution(operations) {
    const queue = [];
    for(const operator of operations) {
        const [cmd, number] = operator.split(' ');
        if(cmd === "I") {
            queue.push(+number);
            continue;
        }
        const removeNum = +number === 1 ? max(queue) : min(queue);
        const idx = queue.findIndex((x) => x === removeNum);
        queue.splice(idx, 1);
    }
    return queue.length ? [max(queue), min(queue)] : [0, 0];
}