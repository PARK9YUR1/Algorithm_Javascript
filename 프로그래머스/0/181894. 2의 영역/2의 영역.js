function solution(arr) {
    const [s, e] = [arr.indexOf(2), arr.lastIndexOf(2)];
    if (s === -1 && e === -1) {
        return [-1];
    }
    return arr.slice(s, e+1);
}