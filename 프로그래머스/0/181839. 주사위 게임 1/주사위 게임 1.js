function solution(a, b) {
    const isOdd = (num) => {return num % 2};
    
    if (isOdd(a) && isOdd(b)) {
        return a**2 + b**2;
    } else if (!isOdd(a) && !isOdd(b)) {
        return Math.abs(a-b);
    } else {
        return 2 * (a+b);
    }
}