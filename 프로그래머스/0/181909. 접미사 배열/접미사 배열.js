function solution(str) {
    const n = str.length;
    const arr = [];
    
    for (let i=0; i<n; i++) {
        arr.push(str.slice(i, n));
    }
    
    arr.sort();
    return arr;
}