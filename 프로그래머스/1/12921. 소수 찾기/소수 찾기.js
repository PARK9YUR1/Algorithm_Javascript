function solution(n) {
    const isPrime = (num) => {
        if (num === 2) {
            return true;
        }
        if (num <= 1 || num%2 === 0) {
            return false;
        }
        
        const N = Math.sqrt(num);
        for (let i = 3; i <= N; i += 2) {
            if (num % i === 0) {
                return false;
            }
        }

        return true;
    }
    
    return Array(n).fill().map((_, i) => i+1).filter(num => isPrime(num)).length;
}