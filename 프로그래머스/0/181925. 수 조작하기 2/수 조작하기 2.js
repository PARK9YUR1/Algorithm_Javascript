function solution(numLog) {
    let answer = "";
    
    const str = {
        "1": "w", "-1": "s", "10": "d", "-10": "a"
    }
    
    for (let i=1; i<numLog.length; i++) {
        answer += str[(numLog[i] - numLog[i-1]).toString()];
    }
    
    return answer;
}