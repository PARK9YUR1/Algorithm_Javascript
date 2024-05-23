function solution(binomial) {
    let [a, oper, b] = binomial.split(" ");
    [a, b] = [+a, +b];
    
    switch (oper) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
    }
}