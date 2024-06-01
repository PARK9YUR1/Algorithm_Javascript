function solution(d, budget) {
    return d.sort((a, b) => a-b)
            .reduce((cnt, price) => cnt + ((budget -= price) >= 0), 0)
    
    // return d.sort((a, b) => a-b)
            // .map((v, i) => d.slice(0, i+1)
            //                 .reduce((acc, cur) => acc+cur, 0))
            // .filter(n => n <= budget)
            // .length;
}