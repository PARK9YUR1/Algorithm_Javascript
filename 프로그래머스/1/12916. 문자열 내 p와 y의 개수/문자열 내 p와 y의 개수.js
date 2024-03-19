function solution(s){
    const str = s.toLowerCase();
    const answer = str.split('p').length == str.split('y').length;
    return answer;
}