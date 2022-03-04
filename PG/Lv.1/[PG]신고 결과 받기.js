function solution(id_list, report, k) { // 내 풀이
    const len = id_list.length;
    const answer = new Array(len).fill(0);
    const reporterArr = {};
    const reportedArr = {};
    
    for(let i = 0 ; i < report.length ; i++) {
        const [reporter, reported] = report[i].split(' ');
        if(reporterArr[reporter] && reporterArr[reporter].includes(reported)) continue;
        
        if(reporterArr[reporter]) reporterArr[reporter].push(reported);
        else reporterArr[reporter] = [reported];
        if(reportedArr[reported]) reportedArr[reported]++;
        else reportedArr[reported] = 1;
    }
    
    for(const reported in reportedArr)
        if(reportedArr[reported] < k) delete reportedArr[reported];
    
    for(let i = 0 ; i < len ; i++) {
        for(const reported in reportedArr) {
            if(reporterArr[id_list[i]] && reporterArr[id_list[i]].includes(reported))
                answer[i]++;
        }
    }
    
    return answer;
}

function solution(id_list, report, k) { // 다른 사람 풀이
    const reports = [...new Set(report)].map(a=>{return a.split(' ')});
    const counts = new Map();
    for (const bad of reports)
        counts.set(bad[1], counts.get(bad[1]) + 1 || 1);

    const good = new Map();
    for(const report of reports)
        if(counts.get(report[1]) >= k)
            good.set(report[0], good.get(report[0]) + 1 || 1);
    
    return id_list.map(a => good.get(a) || 0);
}

function solution(id_list, report, k) { // 리팩토링한 내 풀이
    const reports = [...new Set(report)].map(x => x.split(' '));
    const reporterObj = {};
    const reportedObj = {};
    
    for(let i = 0 ; i < reports.length ; i++) {
        const [_, reported] = reports[i];
        reportedObj[reported] ? reportedObj[reported]++ : reportedObj[reported] = 1;
    }

    for(const [reporter, reported] of reports)
        if(reportedObj[reported] >= k)
            reporterObj[reporter] ? reporterObj[reporter]++ : reporterObj[reporter] = 1;
    
    return id_list.map(x => reporterObj[x] ? reporterObj[x] : 0);
}