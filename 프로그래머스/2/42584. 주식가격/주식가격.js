function solution(prices) {
    const N = prices.length;
    
    let answer = Array(N).fill(0);  // 가격이 떨어지지 않는 기간 (초)
    let s = [];  // index (가격이 떨어지지 않은 index를 저장)
    
    function peek(stack) {
        return stack[stack.length - 1];
    }
    
    for (let i=0; i<N; i++) {
        // 떨어지는 경우
        while (s.length && prices[peek(s)] > prices[i]) {
            const top = s.pop();
            answer[top] = i - top;
        }
        
        // 떨어지지 않는 경우
        s.push(i);
    }
    
    // 끝까지 가격이 떨어지지 않은 경우
    while (s.length) {
        const top = s.pop();
        answer[top] = N - 1 - top;
    }
    
    return answer;
}