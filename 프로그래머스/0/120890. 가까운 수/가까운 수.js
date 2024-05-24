function solution(array, n) {
    array.sort((a, b) => a - b);
    return array.sort((a, b) => Math.abs(a-n) - Math.abs(b-n))[0];
}