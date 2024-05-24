function solution(arr) {
    let n = 0;
    while (true) {
        if (2**n >= arr.length) {
            const l = 2**n - arr.length;
            return [...arr, ...Array(l).fill(0)];
        }
        n++;
    }
    
    
}