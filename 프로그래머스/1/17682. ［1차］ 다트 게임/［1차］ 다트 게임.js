function solution(dartResult) {
    let score = [0];
    let N = 0;
    let cur = -1;
    
    const bonus = {
        "S": 1, "D": 2, "T":3
    }
    
    dartResult.split("").forEach((v, i) => {
        if (!isNaN(v)) {
            if (v === "0" && cur !== -1) {
                cur = 10;
            } else {
                cur = Number(v);
            }
        } else {
            if (v === "S" || v === "D" || v === "T") {
                score.push(cur ** bonus[v]);
                N++;
            } else {
                if (v === "*") {
                    score[N-1] *= 2;
                    score[N] *= 2;
                } else {
                    score[N] *= (-1);
                }
            }
            cur = -1;
        }
    })
    
    return score.reduce((acc, cur) => acc+cur, 0);
}