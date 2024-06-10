function solution(k, score) {
    let rank = [];
    let answer = [];
    
    for (s of score) {
        if (rank.length < k) {
            rank.push(s);
        } else {
            rank = [...rank, s].sort((a, b) => a - b).slice(1);
        }
        answer.push(Math.min(...rank));
    }
    
    return answer;
}