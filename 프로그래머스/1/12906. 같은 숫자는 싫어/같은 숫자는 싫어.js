function solution(arr) {
    const answer = [];
    let top;
    
    arr.forEach((num) => {
        if (top !== num) {
            answer.push(num);
            top = num;
        }    
    })
    
    return answer;
}