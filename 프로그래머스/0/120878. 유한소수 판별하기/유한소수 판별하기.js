function solution(a, b) {
    if (!(b % a)) {
        b /= a;
        a = 1;
    }
    
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