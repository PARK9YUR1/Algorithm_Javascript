// (0, 0) 기준으로 블록 좌표 재구성
function moveBlocks(block) {
    let mnX = Math.min(...block.map(b => b[0]));
    let mnY = Math.min(...block.map(b => b[1]));

    return block.map(b => [b[0]-mnX, b[1]-mnY]).sort();
}

// 블록회전 좌표
function rotateBlocks(block) {
    let mx = Math.max(...block.map(b => Math.max(b[0], b[1])));
    let rotateBlock = block.map(b => [mx-b[1], b[0]]);

    return moveBlocks(rotateBlock);
}

// 블록 좌표 찾기
function getBlocks(grid, N, v) {
    const visited = Array(N).fill().map(_ => Array(N).fill(false));
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];

    let blocks = [];

    function bfs(i, j) {
        let q = [[i, j]];
        let block = [[i, j]];
        visited[i][j] = true;

        while (q.length) {
            let [x, y] = q.shift();
            for (let k=0; k<4; k++) {
                let [nx, ny] = [x+dx[k], y+dy[k]];
                if (nx>=0 && nx<N && ny>=0 && ny<N && !visited[nx][ny] && grid[nx][ny] === v) {
                    visited[nx][ny] = true;
                    q.push([nx, ny]);
                    block.push([nx, ny]);
                }
            }
        }

        return block;
    }

    for (let i=0; i<N; i++) {
        for (let j=0; j<N; j++) {
            if (grid[i][j] === v && !visited[i][j]) {
                const block = bfs(i, j);
                blocks.push(block);
            }
        }
    }

    return blocks.map(moveBlocks);
}

function solution(game_board, table) {
    const N = table.length;
    
    let empty = getBlocks(game_board, N, 0);  // 게임보드 빈칸 좌표
    let puzzles = getBlocks(table, N, 1);  // 테이블 퍼즐 좌표
    
    let answer = 0;  // 최대로 채울 수 있는 블록 칸 개수
    
    puzzles.forEach(puzzle => {
        for (let i=0; i<empty.length; i++) {
            let match = false;  // 현재 퍼즐 일치 여부
            for (let j=0; j<4; j++) {  // 4번 회전
                puzzle = rotateBlocks(puzzle);
                // 회전했을 때 
                if (JSON.stringify(puzzle) === JSON.stringify(empty[i])) {
                    empty.splice(i, 1);  // 해당 빈칸은 채웠으니 삭제
                    answer += puzzle.length;  // 현재 퍼즐의 블록 칸 개수
                    match = true;
                    break;
                }
            }
            if (match) break;  // 현재 퍼즐을 채웠을 경우 다음 퍼즐로
        }
    })
    
    return answer;
}