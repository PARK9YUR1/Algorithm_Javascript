function solution(num, total) {
    const arr = (n) => {
        return Array(num).fill().map((_, i) => i+n);
    }
    
    const sum = (n) => {
        return arr(n).reduce((acc, cur) => acc+cur, 0);
    }
    
    const [x, y] = [parseInt(total/num), parseInt(num/2)];
    let n = x - y;
    
    while (true) {
        if (sum(n) === total) {
            return arr(n);
        }
        n++;
    }
}