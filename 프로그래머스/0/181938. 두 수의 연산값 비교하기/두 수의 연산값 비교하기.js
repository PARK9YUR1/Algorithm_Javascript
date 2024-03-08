function solution(a, b) {
    var answer = Math.max(a.toString()+b.toString(), (2*a*b).toString());
    return answer;
}