function solution(lines) {
    let [s, e] = [0, 0];
    lines.forEach((line) => {
        const [x, y] = line;
        s = s > x ? x : s;
        e = e < y ? y : e;
    })
    
    let nums = {};
    
    for (let i=s; i<e; i++) {
        nums[i] = 0;
    }
    
    lines.forEach((line) => {
        const [x, y] = line;
        
        for (let i=x; i<y; i++) {
            nums[i]++;
        }
    })
    
    return Object.values(nums).filter(num => num > 1).length;
}