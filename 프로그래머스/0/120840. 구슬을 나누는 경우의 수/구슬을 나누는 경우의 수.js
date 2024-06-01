function solution(balls, share) {
    const factorial = (n) => {
        if (n === 0 || n === 1) {
            return 1;
        } else {
            return n * factorial(n-1);
        }
    }
    
    // balls개 중 share개 뽑기
    return Math.round(factorial(balls) / (factorial(balls-share) * factorial(share)));
}