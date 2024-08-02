function solution(numbers, target) {
    const N = numbers.length;
    let answer = 0;
    
    function calc(i, sum) {
        const cur = numbers[i];
        
        if (i === N) {
            if (sum === target) {
                answer++;
            }
            return;
        }
        
        calc(i+1, sum - cur)
        calc(i+1, sum + cur)
    }
    
    calc(0, 0)
    
    return answer;
}