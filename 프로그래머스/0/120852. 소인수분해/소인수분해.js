function solution(n) {
    let num = n;
    const answer = [];
    
    for (let i=2; i<=n; i++) {
        while (true) {
            if (num % i) {
                break;
            } else {
                num /= i;
                answer.push(i);
            }
        }
    }
    
    return [... new Set(answer)];
}