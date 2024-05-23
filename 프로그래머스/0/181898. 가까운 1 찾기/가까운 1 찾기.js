function solution(arr, idx) {
    return arr.indexOf(1, idx);
    // return (i => i<0 ? -1 : i+idx)(arr.slice(idx).indexOf(1));
}