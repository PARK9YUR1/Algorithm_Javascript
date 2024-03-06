function solution(a, b) {
    const ans1 = a.toString() + b.toString();
    const ans2 = b.toString() + a.toString();

    const answer = Math.max(ans1, ans2)
    return answer;
}