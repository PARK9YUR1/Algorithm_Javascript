function solution(my_string, n) {
    let answer = "";
    for (str of my_string) {
        answer += str.repeat(n);
    }
    return answer;
}