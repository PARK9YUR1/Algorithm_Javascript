function solution(s1, s2) {
    var answer = 0;
    for (s of s1) {
        if (s2.indexOf(s) >= 0) {
            answer++;
        }
    }
    return answer;
}