function solution(t, p) {
    const len = p.length;
    let answer = 0;
    for (let i=0; i<=t.length-len; i++) {
        const num = parseInt(t.slice(i,i+len));
        if (num <= parseInt(p)) {
            answer ++;
        }
    }
    return answer;
}