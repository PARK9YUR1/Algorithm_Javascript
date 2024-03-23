function solution(a, b) {
    let answer = 0;
    const [mn, mx] = [Math.min(a, b), Math.max(a, b)];
    for (let n=mn; n<=mx; n++) {
        answer += n;
    }
    return answer;
}