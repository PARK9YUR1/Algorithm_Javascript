function solution(n) {
    let num = n;
    const answer = [];
    
    for (let i=2; i<=n; i++) {
        while (true) {
            if (num % i) {
                break;
            } else {
                num /= i;
                if (!answer.includes(i)) {
                    answer.push(i);
                }
            }
        }
    }
    
    return answer;
}