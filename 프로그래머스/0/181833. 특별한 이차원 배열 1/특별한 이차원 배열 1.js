function solution(n) {
    // var answer = Array(n).fill(Array(n).fill(0));
    // -> 모든 행이 참조
    
    var answer = Array.from({ length: n }, () => Array(n).fill(0));
    
    for (let i=0; i<n; i++) {
        for (let j=0; j<n; j++) {
            if (i == j) {
                answer[i][j] = 1;
            }
        }
    }
    
//     let answer = [];
    
//     for (let i=0; i<n; i++) {
//         let arr = [];
//         for (let j=0; j<n; j++) {
//             arr.push(i==j ? 1 : 0);
//         }
//         answer.push(arr);
//     }
    
    return answer;
}