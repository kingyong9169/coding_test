function solution(s) {
    const alpha = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    
    for(const alp of alpha){
        let regexp = new RegExp(alp, "gi");
        if (s.indexOf(alp) != -1) {
            s = s.replace(regexp, alpha.indexOf(alp));
        }
    }
    return +s;
}