function solution(s) {
    const nums = s.split(" ").map(n => Number(n));
    return [Math.min(...nums), Math.max(...nums)].join(" ");
}