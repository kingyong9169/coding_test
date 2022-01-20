function solution(houses){
    for(let i = 1 ; i < houses.length ; i++){
        houses[i][0] += Math.min(houses[i - 1][1], houses[i - 1][2]);
        houses[i][1] += Math.min(houses[i - 1][0], houses[i - 1][2]);
        houses[i][2] += Math.min(houses[i - 1][0], houses[i - 1][1]);
    }
    console.log(Math.min(...houses[houses.length - 1]));
}

const input = require('fs').readFileSync('BOJ/1149/1149.txt').toString().trim().split('\n');
const houses = input.slice(1).map((x) => x.split(" ").map((v) => parseInt(v)));

solution(houses);