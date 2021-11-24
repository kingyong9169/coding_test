function solution(skill, skill_trees) { // 처음 내 풀이 : 제일 느림
    let answer = 0;
    const skillArr = skill.split('');
    skill_trees = skill_trees
        .map((cur) => cur.split('')
        .filter((x) => skillArr.includes(x)).join(''));
    for(const branch of skill_trees){
        if(skill.startsWith(branch)) answer++;
    }
    return answer;
}

function solution(skill, skill_trees) { // 정규표현식 풀이 : 그 다음 빠름
    const regex = new RegExp(`[^${skill}]`, 'g');

    return skill_trees
        .map((x) => x.replace(regex, ''))
        .filter((x) => skill.indexOf(x) === 0 || x === "")
        .length;
}

function solution(skill, skill_trees) { // continue 활용 : 제일 빠름
    function isCorrect(n) {
        const test = skill.split('');
        for (let i = 0; i < n.length; i++) {
            if (!skill.includes(n[i])) continue;
            if (n[i] === test.shift()) continue;
            return false;
        }
        return true;
    }

    return skill_trees.filter(isCorrect).length;
}