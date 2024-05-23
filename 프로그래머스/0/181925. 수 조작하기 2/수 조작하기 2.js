function solution(numLog) {
    let answer = "";
    
    const calc = (n) => {
        let str = (n === 1 ? "w" :
                   n === -1 ? "s" :
                   n === 10 ? "d" :
                              "a")  // n = -10
        answer += str;
    }
    
    for (let i=1; i<numLog.length; i++) {
        calc(numLog[i] - numLog[i-1]);
    }
    
    return answer;
}