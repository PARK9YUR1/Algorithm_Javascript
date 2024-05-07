function solution(num_list) {
    const oddSum  = num_list.filter((num, i) => (i % 2))
                            .reduce((acc, cur) => acc + cur);
    const evenSum = num_list.filter((num, i) => !(i % 2))
                            .reduce((acc, cur) => acc + cur);
    
    return Math.max(oddSum, evenSum);
}