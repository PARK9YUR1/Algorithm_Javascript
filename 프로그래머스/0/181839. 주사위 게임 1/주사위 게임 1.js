function solution(a, b) {
    if (a%2 && b%2) {
        return a**2 + b**2;
    } else if (!(a%2) && !(b%2)) {
        return Math.abs(a-b);
    } else {
        return 2 * (a+b);
    }
}