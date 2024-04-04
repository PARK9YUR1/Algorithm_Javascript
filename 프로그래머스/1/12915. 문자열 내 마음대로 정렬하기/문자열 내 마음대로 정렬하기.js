function solution(strings, n) {
    return answer = strings.sort((a, b) => {
        if (a[n] === b[n]) {
            return a.localeCompare(b);
        }
        return a[n].localeCompare(b[n]);
    });
}