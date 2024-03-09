function solution(num, n) {
    var answer = 1;
    if (num%n) {
        answer = 0;
    }
    return answer;
}