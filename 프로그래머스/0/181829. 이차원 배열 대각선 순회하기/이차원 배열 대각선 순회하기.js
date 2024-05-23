function solution(board, k) {
    const [N, M] = [board.length, board[0].length];
    let answer = 0;
    
    for (let i=0; i<N; i++) {
        for (let j=0; j<M; j++) {
            if (i+j <= k) {
                answer += board[i][j];
            }
        }
    }

    return answer;
}