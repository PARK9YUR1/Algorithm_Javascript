function solution(number, n, m) {
    var answer = 1;
    if (number%n || number%m) {
        answer = 0;
    }
    return answer;
}