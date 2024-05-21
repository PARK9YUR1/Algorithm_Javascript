function solution(n, k) {
    return Array(n).fill().map((_, i) => (i+1)).filter(num => !(num%k));
}