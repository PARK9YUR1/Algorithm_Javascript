function solution(numbers, n) {
    const result = numbers.reduce((acc, cur) => {
        if (acc > n) {
            return acc;
        } else {
            return acc + cur;
        }
    });
    return result;
}