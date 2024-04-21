function solution(numbers) {
    numbers.sort((a, b) => b - a);
    
    const [mx1, mx2] = numbers;
    return mx1 * mx2;
}