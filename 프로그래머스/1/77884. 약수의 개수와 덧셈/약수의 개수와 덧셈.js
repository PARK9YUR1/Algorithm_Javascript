function solution(left, right) {
    var answer = 0;
    for (let i=left; i<=right; i++) {
        let cnt = 0;
        for (let j=1; j<=i; j++) {
            if (!(i%j)) {
                cnt ++;
            }
        }
        if (cnt%2) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}