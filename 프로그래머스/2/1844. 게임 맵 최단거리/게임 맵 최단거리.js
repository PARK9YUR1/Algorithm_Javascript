function solution(maps) {
    const N = maps.length;
    const M = maps[0].length;
    
    const dir = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    
    let visited = Array(N).fill().map(_ => Array(M).fill(0));

    let q = [[0, 0]];
    visited[0][0] = 1;

    while (q.length) {
        const [x, y] = q.shift();

        for (const [dx, dy] of dir) {
            const [nx, ny] = [x+dx, y+dy];

            if (nx >= 0 && nx < N && ny >= 0 && ny < M && maps[nx][ny] === 1 && visited[nx][ny] === 0) {
                visited[nx][ny] = visited[x][y] + 1;
                q.push([nx, ny]);
            }
        }
    }
    
    if (visited[N-1][M-1] === 0) {
        return -1;
    } else {
        return visited[N-1][M-1];
    }
}