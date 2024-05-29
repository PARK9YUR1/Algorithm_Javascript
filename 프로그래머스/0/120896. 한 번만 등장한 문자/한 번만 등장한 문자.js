function solution(s) {
    const answer = [];
    
    for (w of s) {
        if (s.indexOf(w) === s.lastIndexOf(w)) {
            answer.push(w);
        }
    }
    
    return answer.sort().join("");
    
//     const arr = [".", ...s.split("").sort(), "."];
    
//     const answer = [];
//     for (let i=1; i<arr.length-1; i++) {
//         if (arr[i-1] !== arr[i] && arr[i] !== arr[i+1]) {
//             answer.push(arr[i]);
//         }
//     }
    
//     return answer.join("");
}