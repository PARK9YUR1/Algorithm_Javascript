function solution(a, b, n) {
    // 병 n개 갖고 있음. a개 주면 b개 돌려줌
    let [give, receive, bottle] = [a, b, n];
    let answer = 0;
    
    while (bottle >= give) {
        // a개의 병을 제시하는 횟수
        const count = parseInt(bottle / give);
        
        answer += receive * count;
        bottle += receive * count;
        bottle -= give * count;
    }
    
    return answer;
}