function solution(houses){
    for(let i = 1 ; i < houses.length ; i++){
        houses[i][0] += Math.min(houses[i - 1][1], houses[i - 1][2]);
        houses[i][1] += Math.min(houses[i - 1][0], houses[i - 1][2]);
        houses[i][2] += Math.min(houses[i - 1][0], houses[i - 1][1]);
    }
    console.log(Math.min(...houses[houses.length - 1]));
}

const filePath = process.platform === 'linux'? '/dev/stdin' : 'BOJ/1149/1149.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const houses = input.slice(1).map((x) => x.split(" ").map((v) => +v));

solution(houses);