function solution(s) {
    var answer = s.split('');
    answer.sort((a, b) => b.charCodeAt() - a.charCodeAt());
    
    return answer.join('');
}