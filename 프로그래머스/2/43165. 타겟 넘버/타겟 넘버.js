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
        
        calc(i+1, sum - 2 * cur)
        calc(i+1, sum)
    }
    
    calc(0, numbers.reduce((acc, cur) => acc+cur, 0))
    
    return answer;
}