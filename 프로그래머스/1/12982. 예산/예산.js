function solution(d, budget) {
    return d.sort((a, b) => a-b)
            .map((v, i) => d.slice(0, i+1)
                            .reduce((acc, cur) => acc+cur, 0))
            .filter(n => n <= budget)
            .length;
}