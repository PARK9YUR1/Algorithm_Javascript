function solution(numbers, k) {
    const n = numbers.length;
    const res = (2*k - 1) % n;
    return res ? res : n;
}