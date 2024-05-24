function solution(n) {
    const factorial = (num) => {
        if (num > 1) {
            return num * factorial(num-1);
        } else {
            return 1;
        }
    }
    
    let num = 1;
    
    while (num < 11) {
        if (factorial(num) > n) {
            return --num;
        } else if (factorial(num) === n) {
            return num;
        }
        
        num++;
    }
}