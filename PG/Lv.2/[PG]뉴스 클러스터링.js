function solution(str1, str2) {
    const firstSet = [], secondSet = [], intersection = [];
    verify(str1.toLowerCase(), firstSet);
    verify(str2.toLowerCase(), secondSet);
    for(const value of firstSet){
        if(secondSet.includes(value)){
            intersection.push(value);
            const idx = secondSet.indexOf(value);
            if(idx !== -1) secondSet.splice(idx, 1);
        }
    }
    const unionLen = firstSet.length + secondSet.length;
    return unionLen !== 0 ? Math.floor(65536 * intersection.length/unionLen) : 65536;
}

function verify(str, arr){
    for(let i = 0; i < str.length - 1; i++)
        if(!(str[i] + str[i+1]).match(/[^a-z]/g))
            arr.push(str[i] + str[i+1]);
}