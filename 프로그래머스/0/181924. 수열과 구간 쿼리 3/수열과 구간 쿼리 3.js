function solution(arr, queries) {
    queries.map(([i, j]) => {
        const tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    })
    
    return arr;
}