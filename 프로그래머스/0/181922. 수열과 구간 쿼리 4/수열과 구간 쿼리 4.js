function solution(arr, queries) {
    for (query of queries) {
        const [s, e, k] = query;
        for (let i=s; i<=e; i++) {
            if (i%k === 0) {
                arr[i]++;
            }
        }
    }
    
    return arr;
}