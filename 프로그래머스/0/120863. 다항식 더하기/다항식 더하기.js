function solution(polynomial) {
    const answer = [];
    const arr = polynomial.split(" + ");
    const x = arr.filter(a => a.includes("x"))
                 .map(a => a!=="x" ? parseInt(a.slice(0, a.length-1)) : 1)
                 .reduce((acc, cur) => acc+cur, 0);
    const num =  arr.filter(a => !a.includes("x"))
                    .map(n => parseInt(n))
                    .reduce((acc, cur) => acc+cur, 0);
    
    if (x) {
        answer.push(x===1 ? "x" : x+"x");
    }
    if (num) {
        answer.push(num+"");
    }
    
    if (answer.length === 2) {
        answer.splice(1, 0, "+");
    }
    
    return answer.join(" ");
}