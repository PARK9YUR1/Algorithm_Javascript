function solution(dots) {
    dots.sort((x, y) => {
        if (x[0] !== y[0]) {
            return x[0] - y[0];
        }
        return x[1] - y[1];
    })
    
    const [mn, mx] = [dots[0], dots[3]];
    
    const x = mx[0] - mn[0];
    const y = mx[1] - mn[1];
    
    return x*y;
}