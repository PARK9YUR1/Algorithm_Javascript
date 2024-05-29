function solution(arr, k) {
    return [...new Set(arr), ...Array(k).fill(-1)].slice(0, k);
}