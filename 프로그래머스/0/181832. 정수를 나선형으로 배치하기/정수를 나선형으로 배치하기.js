function solution(n) {
    let arr = Array(n).fill().map((_) => Array(n).fill(0));

    const dir1 = {
        "up": [-1, 0], "down": [1, 0],
        "left": [0, -1], "right": [0, 1]
    };
    
    // 우 -> 하 -> 좌 -> 상
    
    // const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const dir = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let d = 0;
    let [x, y] = [0, 0];
    
    for (let i=1; i<=n**2; i++) {      
        arr[x][y] = i;
        
        let [dx, dy] = dir[d];
        let [nx, ny] = [x+dx, y+dy];
        
        if (nx>=n || nx<0 || ny>=n || ny<0 || arr[nx][ny]) {
            d = (d+1) % 4;
            [dx, dy] = dir[d];
            [nx, ny] = [x+dx, y+dy];
        }
        
        [x, y] = [nx, ny];
    }
    
    return arr;
}