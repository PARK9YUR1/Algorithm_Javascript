function solution(s) {
    let alpha = {};
    
    return s.split("").map((v, i) => {
        if (alpha[v] || alpha[v] === 0) {
            const idx = alpha[v];
            alpha[v] = i;
            return i - idx;
        } else {
            alpha[v] = i;
            return -1;
        }
    })
}