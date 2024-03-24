function solution(arr) {
    var answer = [];  // stack
    arr.forEach(num => {
        if ((answer && answer[answer.length - 1] !== num) || !(answer)) {
            answer.push(num);
        }
    })
    
    return answer;
}