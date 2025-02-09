function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 2배 해주지 않으면 경로가 이상해짐
    [characterX, characterY, itemX, itemY] = [characterX*2, characterY*2, itemX*2, itemY*2];
    
    // 최단거리
    let answer = 0;
    
    let graph = Array(102).fill().map(_ => Array(102).fill(-1));  // (-1:외부, 0:내부, 1:테두리)
    let visited = Array(102).fill().map(_ => Array(102).fill(0));
    
    for (let r of rectangle) {
        const [lx, ly, rx, ry] = r.map(x => x*2);  // 2배
        
        for (let i=lx; i<=rx; i++) {
            for (let j=ly; j<=ry; j++) {
                if (i > lx && i < rx && j > ly && j < ry) {  // 직사각형 내부 (0)
                    graph[i][j] = 0;
                } else if (graph[i][j]) {  // 직사각형 테두리 (1)
                    graph[i][j] = 1;
                }
            }
        }
    }
    
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];
    
    let q = [];
    q.push([characterX, characterY]);
    
    while (q.length) {
        const [x, y] = q.shift();
        
        if (x === itemX && y === itemY) {
            answer = Math.floor(visited[x][y] / 2);  // 원래 값으로 되돌림
            break;
        }
        
        for (let i=0; i<4; i++) {
            const [nx, ny] = [x+dx[i], y+dy[i]];
            
            if (nx > 0 && nx < 102 && ny > 0 && ny < 102 && !visited[nx][ny]) {
                if (graph[nx][ny] === 1) {  // 테두리일 경우
                    visited[nx][ny] = visited[x][y] + 1;
                    q.push([nx, ny]);
                }
            }
        }
    }
    
    return answer;
}