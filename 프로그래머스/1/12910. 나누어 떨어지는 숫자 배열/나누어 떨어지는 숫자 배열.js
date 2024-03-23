function solution(arr, divisor) {
    var answer = [];
    arr.forEach(n => {
        if (!(n%divisor)) {
            answer.push(n);
        }
    })
    
    if (answer.length) {
        answer.sort((a, b) => a - b);
    } else {
        answer = [-1];
    }
    
    return answer;
}