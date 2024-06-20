function solution(dots) {
    /*
        [A, B, C, D]
        - AB CD
        - AC BD
        - AD BC
    */

    const slope = (i, j) => {
        const [xi, yi] = i;
        const [xj, yj] = j;
        
        return (yj-yi)/(xj-xi);        
    }
    
    
    const [A, B, C, D] = dots;
    
    if (slope(A, B) === slope(C, D)) {
        return 1;
    } else if (slope(A, C) === slope(B, D)) {
        return 1;
    } else if (slope(A, D) === slope(B, C)) {
        return 1;
    }
    
    return 0;
}