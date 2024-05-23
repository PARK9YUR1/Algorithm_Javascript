function solution(arr, intervals) {
    const [[s1, e1], [s2, e2]] = intervals;
    return [...arr.slice(s1, e1+1), ...arr.slice(s2, e2+1)]
}