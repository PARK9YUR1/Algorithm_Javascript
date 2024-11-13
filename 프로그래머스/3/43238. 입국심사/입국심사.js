function solution(n, times) {
    let [mn, mx] = [1, Math.max(...times) * n];
    
    while (mn <= mx) {
        const mid = Math.floor((mn + mx) / 2);
        
        // 심사 받을 수 있는 사람 수
        const cnt = times.reduce((acc, cur) => {
            return acc + Math.floor(mid / cur);
        }, 0);
        
        if (cnt >= n) {
            mx = mid - 1;
        } else {
            mn = mid + 1;
        }
    }
    
    return mn;
}