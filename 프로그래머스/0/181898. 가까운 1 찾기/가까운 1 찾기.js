function solution(arr, idx) {
    return (i => i<0 ? -1 : i+idx)(arr.slice(idx).indexOf(1));
}