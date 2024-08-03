function solution(a, b) {
    // 최대공약수
    let num = Math.min(a, b);
    while (num) {
        if (a%num || b%num) {
            num--;
        } else {
            break;
        }
    }
    
    a = a/num;
    b = b/num;
    
    while (true) {
        if ((b%2 && b%5) || b === 1) {
            break;
        }
        
        if (!(b % 2)) {
            b /= 2;
        }
        if (!(b % 5)) {
            b /= 5;
        }
    }
    
    return b===1 ? 1 : 2;
}