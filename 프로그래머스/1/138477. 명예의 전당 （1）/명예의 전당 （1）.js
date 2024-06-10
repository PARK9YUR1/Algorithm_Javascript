function solution(k, score) {
    let rank = [];
    let answer = [];
    
    for (s of score) {
        if (rank.length < k) {
            rank = [...rank, s].sort((a, b) => a - b);
        } else {
            rank = [...rank, s].sort((a, b) => a - b).slice(1);
        }
        answer.push(rank[0]);
    }
    
    return answer;
}