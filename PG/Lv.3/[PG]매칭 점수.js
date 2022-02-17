function solution(word, pages) {
    let max = 0;
    const reg = new RegExp(',' + word + ',', 'gi');
    const urlReg = new RegExp(/https:\/\/[^"\s]+/);
    const basic = Array.from(new Array(pages.length), () => new Array(4).fill(0));
    const href = Array.from(new Array(pages.length), () => []);;
    
    for(let i = 0 ; i < pages.length ; i++) {
        const arr = pages[i].replace(/[^a-zA-Z]/g, ',,');
        const wordMatches = (',' + arr + ',').match(reg);
        basic[i][0] = wordMatches ? wordMatches.length : 0;
        const baseUrlMatch = pages[i].match(/<meta property="og:url" content="https:\/\/[^"\s]+"/)[0];
        basic[i][1] = baseUrlMatch.match(urlReg)[0];
        const hrefUrlMatch = pages[i].match(/<a href="https:\/\/[^"\s]+"/g);
        if(hrefUrlMatch) hrefUrlMatch.forEach(x => href[i].push(...x.match(urlReg)));
    }
    
    for(let i = 0 ; i < basic.length ; i++) {
        for(let j = 0 ; j < href.length ; j++) {
            for(let k = 0 ; k < href[j].length ; k++) {
                if(href[j][k] === basic[i][1])
                    basic[i][2] += basic[j][0] / href[j].length;
            }
        }
        basic[i][3] = basic[i][2] + basic[i][0];
    }
    
    basic.forEach((x, i) => max = x[3] > basic[max][3] ? i : max);
    return max;
}