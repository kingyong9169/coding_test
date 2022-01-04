function solution(s) { // 정규식
    s = s.toLowerCase().match(/\s+|\w+/g);
    s.forEach((str, idx) => {
        if(str.match(/\w+/g)) s[idx] = str[0].toUpperCase() + str.slice(1);
    });
    return s.join('');
}

function solution(s) { // 빈 문자열은 index로 접근할 수 없어 charAt 사용
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase()).join(" ");
}