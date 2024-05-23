function solution(n) {
    const isCompositeNumber = (num) => {
        let [cnt, n] = [0, num];
        
        while (n) {
            if (num % n === 0) { cnt++ }
            n--;
        }
        
        return cnt >= 3;
    }
    
    return Array.from({length: n}, (_, i) => i+1)
                .filter(num => isCompositeNumber(num))
                .length;
}