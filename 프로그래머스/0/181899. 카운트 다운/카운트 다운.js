function solution(start, end_num) {
    let answer = [];
    for (let num=start; num>=end_num; num--) {
        answer.push(num);
    }
    return answer;
}