function solution(jobs) {
    let answer = 0, current = 0;
    const num = jobs.length;
    jobs.sort((a, b) => {
        if(a[0] === b[0]) return a[1] - b[1];
        return a[0] - b[0];
    });

    while(jobs.length > 0) {
        const [req, work] = jobs.shift();
        const diff = Math.abs(current - req) + work;
        answer += current <= req ? work : diff;
        current += current >= req ? work : diff;
        jobs.sort((a, b) => {
            if(a[0] <= current && b[0] <= current) return a[1] - b[1];
        });
    }
    return Math.floor(answer / num);
}