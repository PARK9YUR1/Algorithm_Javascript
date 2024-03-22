function solution(arr) {
    if (arr.length > 1) {
        const i = arr.indexOf(Math.min(...arr));
        arr.splice(i, 1);
        return arr;
    } else {
        return [-1];        
    }
}