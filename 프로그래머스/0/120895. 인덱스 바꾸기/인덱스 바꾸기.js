function solution(my_string, num1, num2) {
    const [mn, mx] = [Math.min(num1, num2), Math.max(num1, num2)];
    return my_string.slice(0, mn) + my_string[mx] + my_string.slice(mn+1, mx) + my_string[mn] + my_string.slice(mx+1);
}