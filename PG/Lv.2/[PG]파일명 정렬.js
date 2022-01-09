function solution(files) {
    const regExp = /[a-z .-]+|\d{1,5}/gi;

    files.sort((a, b) => {
        const matchA = a.match(regExp);
        const matchB = b.match(regExp);
        const headA = matchA[0].toUpperCase();
        const headB = matchB[0].toUpperCase();
        return headA > headB ? 1 : headA < headB ? - 1 : (+matchA[1]) - (+matchB[1]);
    });
    return files;
}