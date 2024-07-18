function solution(k, m, score) {
    const apples = score.sort((a, b) => (b - a));
    let answer = 0;
    
    for (let i=0; i<=score.length-m; i+=m) {
        answer += apples[i+m-1] * m;
    }
    
    return answer;
}
