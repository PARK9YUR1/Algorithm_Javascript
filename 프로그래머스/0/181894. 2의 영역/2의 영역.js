function solution(arr) {
    const [s, e] = [arr.indexOf(2), arr.lastIndexOf(2)];
    return (s===-1 && e===-1) ? [-1] : arr.slice(s, e+1);
}