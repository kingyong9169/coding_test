function solution(dirs) {
    const posSet = new Set();
    let curX = 0, curY = 0;
    
    for(const command of dirs){
        if(command === "U" && (curY + 1) <= 5){
            posSet.add('' + curX + (curY + 1) + curX + curY).add('' + curX + (curY++) + curX + curY);
        }
        else if(command === "D" && (curY - 1) >= -5){
            posSet.add('' + curX + (curY - 1) + curX + curY).add('' + curX + (curY--) + curX + curY);
        }
        else if(command === "L" && (curX - 1) >= -5){
            posSet.add('' + (curX - 1) + curY + curX + curY).add('' + (curX--) + curY + curX + curY);
        }
        else if(command === "R" && (curX + 1) <= 5){
            posSet.add('' + (curX + 1) + curY + curX + curY).add('' + (curX++) + curY + curX + curY);
        }
    }
    return [...posSet].length / 2;
}