function solution(s) {
    const N = s.length - 1;
    let answer = 0;
    let [cx, cy] = [0, 0];  // count
    let x = s[0];
    
    s.split("").map((v, i) => {
        if (!cx && !cy) {
            x = v;
        }
        
        if (v === x) { cx++; }
        else { cy++; }
        
        if (cx && cy && cx==cy || i === N) {
            cx = cy = 0;
            answer++;
        }
    })
    
    return answer;
}