function solution(number, limit, power) {
    const divisor = (num) => {
        let count = 0;
        for (let n=1; n<=Math.sqrt(num); n++) {
            if (num%n === 0) {
                count++;
                if (n !== num/n) {
                    count++;
                }
            }
            
            if (count > limit) {
                return power;
            }
        }
        return count;
    }
    
    return Array(number).fill()
                        .map((_, i) => divisor(i+1))
                        .reduce((acc, cur) => acc+cur, 0);
}