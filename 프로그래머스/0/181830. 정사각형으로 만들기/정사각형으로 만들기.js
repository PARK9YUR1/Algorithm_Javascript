function solution(arr) {
    const [N, M] = [arr.length, arr[0].length];
    
    if (N < M) {
        return [...arr, ...Array.from({ length: M-N }, () => Array(M).fill(0))];
    } else if (N > M) {
        return arr.map(a => [...a, ...Array(N-M).fill(0)]);
    } else {
        return arr;
    }
}