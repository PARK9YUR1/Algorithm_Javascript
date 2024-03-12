function solution(a, d, included) {
    var answer = 0;
    for (i in included) {
        if (included[i]) {
            answer += (a + d*i);
        }
    }
    return answer;
}