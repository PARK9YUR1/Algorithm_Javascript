function solution(n, times) {
    times.sort((a, b) => a - b);
    let [mn, mx] = [1, times[times.length - 1] * n];
    
    while (mn < mx) {
        const mid = parseInt((mn + mx) / 2);
        
        // 심사 받을 수 있는 사람 수
        const cnt = times.reduce((acc, cur) => {
            return acc + parseInt(mid / cur);
        }, 0);
        
        if (cnt >= n) {
            mx = mid;
        } else {
            mn = mid + 1;
        }
    }
    
    return mx;
}