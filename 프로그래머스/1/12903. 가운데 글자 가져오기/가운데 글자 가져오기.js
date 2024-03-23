function solution(s) {
    const len = s.length;
    var answer = (len % 2) ? s[len/2-0.5] : s.slice(len/2-1, len/2+1);
    return answer;
}