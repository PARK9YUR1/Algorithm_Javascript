function solution(n) {
    let i = 1;
    while (true) {
        if ((6*i) % n === 0) {
            return i;
        }
        i++;
    }
}