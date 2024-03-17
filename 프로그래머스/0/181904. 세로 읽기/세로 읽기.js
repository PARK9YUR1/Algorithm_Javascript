function solution(str, m, c) {
    var answer = '';
    for (let i=0; i<str.length; i+=m) {
        const idx = i+c-1;
        answer += str[idx];
    }
    return answer;
}