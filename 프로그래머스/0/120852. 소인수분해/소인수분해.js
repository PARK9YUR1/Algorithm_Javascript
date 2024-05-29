function solution(n) {
    let num = n;
    const answer = [];
    
    for (let i=2; i<=n; i++) {
        while (!(num % i)) {
            num /= i;
            answer.push(i);
        }
    }
    
    return [... new Set(answer)];
}