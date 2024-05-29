function solution(s) {
    const arr = [".", ...s.split("").sort(), "."];
    
    const answer = [];
    for (let i=1; i<arr.length-1; i++) {
        if (arr[i-1] !== arr[i] && arr[i] !== arr[i+1]) {
            answer.push(arr[i]);
        }
    }
    
    return answer.join("");
}