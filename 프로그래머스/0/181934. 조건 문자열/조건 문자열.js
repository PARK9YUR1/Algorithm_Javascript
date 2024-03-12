function solution(ineq, eq, n, m) {
    var answer = 0;
    const comparison = ineq+eq;
    
    switch(comparison) {
        case ">=": 
            answer = n >= m;
            break;
        case "<=": 
            answer = n <= m;
            break;
        case ">!": 
            answer = n > m;
            break;
        case "<!": 
            answer = n < m;
            break;
    }
    
    answer = Number(answer);
    return answer;
}