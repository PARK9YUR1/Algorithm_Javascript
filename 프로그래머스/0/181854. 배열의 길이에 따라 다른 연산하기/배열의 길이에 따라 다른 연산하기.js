function solution(arr, n) {
    return arr.length%2 ? 
            arr.map((num, i) => (i%2) ? num : num + n) 
            : arr.map((num, i) => (i%2) ? num + n : num);
}