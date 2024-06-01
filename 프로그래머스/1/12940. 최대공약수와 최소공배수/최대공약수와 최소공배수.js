function solution(n, m) {
    const [mx, mn] = [Math.max(n, m), Math.min(n, m)];
    
    if (mx%mn === 0) {
        return [mn, mx];
    }
    
    
    // 최대공약수
    let num1 = mn;
    while (num1) {
        if (mx%num1 || mn%num1) {
            num1--;
        } else {
            break;
        }
    }
    
    // 최소공배수
    let num2 = mx;
    while (true) {
        if (num2%mn) {
            num2 += mx;
        } else {
            break;
        }
    }
    
    return [num1, num2];
}