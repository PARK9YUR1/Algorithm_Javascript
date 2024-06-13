function solution(board) {
    let answer = 0;
    
    const N = board.length;
    const bombs = [];
    
    const dx = [0, 0, 1, -1, 1, -1, 1, -1];
    const dy = [-1, 1, 0, 0, 1, -1, -1, 1];
    
    for (let i=0; i<N; i++) {
        for (let j=0; j<N; j++) {
            if (board[i][j]) {
                bombs.push([i, j])
            }
        }
    }
    
    for (bomb of bombs) {
        const [x, y] = bomb;
        for (let k=0; k<8; k++) {
            const [nx, ny] = [x+dx[k], y+dy[k]];
            
            if (nx>=0 && nx<N && ny>=0 && ny<N) {
                board[nx][ny] = 2;
            }
        }
    }
    
    for (let i=0; i<N; i++) {
        for (let j=0; j<N; j++) {
            if (!board[i][j]) {
                answer++;
            }
        }
    }
    
    return answer;
}