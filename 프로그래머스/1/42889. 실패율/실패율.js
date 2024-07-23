function solution(N, stages) {
    // [실패유저 수, 참가유저 수, 스테이지 번호]
    let stage = Array(N+1).fill().map((_, i) => [0, 0, i]);
    
    for (let i=1; i<=N; i++) {
        stage[i][0] = stages.filter(s => s===i).length;
        stage[i][1] = stages.filter(s => s>=i).length;
    }
    
    stage = stage.slice(1).sort((a, b) => b[0]/b[1] - a[0]/a[1])
    
    return stage.map(s => s[2]);
}