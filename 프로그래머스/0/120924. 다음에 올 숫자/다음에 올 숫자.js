function solution(common) {
    const [a, b, c] = common;
    const end = common.reverse()[0];
    const [d, r] = [b-a, b/a];
    
    if (d === c-b) {  // 등차수열
        return end + d;
    } else if (r === c/b) {  // 등비수열
        return end * r;
    }
}