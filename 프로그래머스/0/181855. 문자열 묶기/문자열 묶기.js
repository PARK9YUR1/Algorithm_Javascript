function solution(strArr) {
    const arr = strArr.map(str => str.length).sort((a, b) => a - b);
    
    let num = arr[0];
    let cur = 0;  // 현재 count
    let mx = 1;
    
    for (let i=0; i<arr.length; i++) {
        if (arr[i] === num) {
            cur++;
        } else {
            mx = Math.max(cur, mx);
            cur = 1;
            num = arr[i];
        }
    }
    
    return Math.max(cur, mx);
}