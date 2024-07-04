function solution(n, m, section) {
    let paint = 0;
    let e = 0;
    
    for (s of section) {
        if (s > e) {
            paint++;
            e = s + m - 1;
        }
    }
    
    return paint;
}