function solution(board, moves) {
    const N = board.length;
    
    let answer = 0;
    const basket = [];
    
    moves = moves.map(move => move-1);
    
    // tops : 각 번호의 맨위 인형위치
    let tops = Array(N).fill(N);
    for (let j=0; j<N; j++) {
        for (let i=0; i<N; i++) {
            if (board[i][j]) {
                tops[j] = i;
                break;
            }
        }
    }
    
    for (j of moves) {
        const i = tops[j];
        if (i === N) continue;  // j번에서 뽑을 인형이 없는 경우
        
        const doll = board[i][j];  // 이번에 뽑은 인형
        const top = basket[basket.length-1];  // 바구니 맨위 인형
        
        if (top === doll) {
            basket.pop();
            answer += 2;
        } else {
            basket.push(doll);
        }
        
        board[i][j] = 0;
        tops[j]++;
    }
    
    return answer;
}