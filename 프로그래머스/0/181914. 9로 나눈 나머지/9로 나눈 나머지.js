function solution(number) {
    const total = number.split("").reduce((sum, num) => sum + +num, 0);
    return total % 9;
}