function solution(str, s, e) {
    var answer = str.slice(0, s);
    answer += str.slice(s, e+1).split('').reverse().join('');
    answer += str.slice(e+1);
    return answer;
}