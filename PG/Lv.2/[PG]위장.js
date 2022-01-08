function solution(clothes) {
    let answer = 1;
    let i=0;
    let wear=clothes.reduce(function(closet, array){
        let key=array[1];
        closet[key]=closet[key]?closet[key]+1:1;
        return closet;
    },[]);
    
    let result=Object.values(wear)
    
    result.forEach(num=>answer*=(num+1));
    return answer-1;
}