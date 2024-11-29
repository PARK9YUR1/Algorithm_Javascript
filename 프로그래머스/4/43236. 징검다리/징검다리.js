function solution(distance, rocks, n) {
    rocks.sort((a, b) => a - b);
    rocks.push(distance);
    
    let [start, end] = [0, distance];
    
    while (start <= end) {
        const mid = parseInt((start + end) / 2);
        let cnt = 0;  // 제거한 바위 수
        let cur = 0;
        
        for (let rock of rocks) {
            const dist = rock - cur;
            if (dist < mid) {
                cnt++;
                if (cnt > n) break;
            } else {
                cur = rock;
            }
        }
        
        if (cnt > n) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    
    return end;
}