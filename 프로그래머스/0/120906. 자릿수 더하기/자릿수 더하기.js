function solution(n) {
    return n.toString()
            .split("")
            .map(num => parseInt(num))
            .reduce((acc, cur) => acc+cur, 0);
}