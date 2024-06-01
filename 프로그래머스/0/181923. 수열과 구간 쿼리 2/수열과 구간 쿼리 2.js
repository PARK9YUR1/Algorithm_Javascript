function solution(arr, queries) {
    // return queries.map(([s, e, k]) => {
    //     const nums = arr.slice(s, e+1).sort((a, b) => a-b);
    //     for (num of nums) {
    //         if (num > k) {
    //             return num;
    //         }
    //     }
    //     return -1;
    // })
    
    return queries.map(([s, e, k]) => {
        return arr.slice(s, e+1)
                  .filter(n => n>k)
                  .sort((a, b) => a-b)[0] || -1;
    });
}