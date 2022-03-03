const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
let input = [];
rl.on("line", function(x) {
    input.push(x);
}).on("close", function() {
    const t = +input.shift();
    input = input.map(x => x.split(' ').map(Number));
    solution(t);
    process.exit();
});

function solution(t) {
    for(let i = 0 ; i < input.length ; i++) {
        const [row, column] = input[i];
        console.log(tileColoring(i + 1, row, column));
        i += row;
    }
}

function tileColoring(start, row, column) {
    const dy = [0, 0, 1, 1], dx = [0, 1, 0, 1];
    const tileSet = new Set();
    for(let i = start ; i < start + row - 1 ; i++) {
        for(let j = 0 ; j < column - 1 ; j++) {
            if(dx.every((x, k) => input[i + dy[k]][j + dx[k]] === 1))
                tileSet.add(`${i},${j}`)
                .add(`${i},${j + 1}`)
                .add(`${i + 1},${j}`)
                .add(`${i + 1},${j + 1}`);
        }
    }

    for(let i = start ; i < start + row ; i++) {
        for(let j = 0 ; j < column ; j++) {
            if((input[i][j] && tileSet.has(`${i},${j}`)) || (!input[i][j] && !tileSet.has(`${i},${j}`))) continue;
            return 'NO';
        }
    }
    return 'YES';
}
