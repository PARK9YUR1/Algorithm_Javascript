function solution(array) {
    const mx = Math.max(...array);
    const idx = array.indexOf(mx);
    return [mx, idx];
}