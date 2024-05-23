function solution(n) {
    let answer = [n];
    
    while (true) {
        let num = answer.at(-1);
        if (num === 1) {
            break;
        }
        
        if (num % 2) {
            answer.push(3 * num + 1);
        } else {
            answer.push(num / 2);
        }
    }
    
    return answer;
}