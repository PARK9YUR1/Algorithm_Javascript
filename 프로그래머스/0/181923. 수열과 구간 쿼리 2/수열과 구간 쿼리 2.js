function solution(arr, queries) {
    return queries.map(query => {
        const [s, e, k] = query;
        const nums = arr.slice(s, e+1).sort((a, b) => a-b);
        for (num of nums) {
            if (num > k) {
                return num;
            }
        }
        return -1;
    })
}