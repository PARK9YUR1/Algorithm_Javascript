function solution(absolutes, signs) {
    // true: 양수, false: 음수
    let answer = 0;
    for (let i=0; i<signs.length; i++) {
        if (signs[i]) {
            answer += absolutes[i];
        } else {
            answer -= absolutes[i];
        }
    }
    return answer;
}