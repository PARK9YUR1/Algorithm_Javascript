function solution(n) {
    let answer = [n];
    
    while (true) {
        let num = answer.at(-1);
        if (num === 1) {
            break;
        }
        
        answer.push(num%2 ? 3*num+1 : num/2);
    }
    
    return answer;
}