function solution(start, end_num) {
    let answer = [];
    let num = start;
    while (num >= end_num) {
        answer.push(num);
        num--;
    }
    return answer;
}