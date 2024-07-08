function solution(park, routes) {
    park = park.map(p => p.split(""));
    
    
    const [N, M] = [park.length, park[0].length];
    let [x, y] = [0, 0];
    
    
    for (let i=0; i<N; i++) {
        for (let j=0; j<M; j++) {
            if (park[i][j] === "S") {
                [x, y] = [i, j];
            }
        }
    }
    
    
    const direction = {
        "N": [-1, 0],
        "S": [1, 0],
        "W": [0, -1],
        "E": [0, 1]
    };
    
    
    const move = (x, y, mx, my, dis) => {
        let i = 0;
        
        while (i < dis) {
            [x, y] = [x+mx, y+my];
            if (park[x][y] === "X") {
                return false;
            }
            i++;
        }
        
        return true;
    }
    
    
    for (route of routes) {
        const [dir, dis] = route.split(" ");
        const [mx, my] = direction[dir];
        const [dx, dy] = [mx*Number(dis), my*Number(dis)];
        const [nx, ny] = [x+dx, y+dy];
        
        if (nx < 0 || nx >= N || ny < 0 || ny >= M || park[nx][ny] === "X") {
            continue;
        }
        if (!move(x, y, mx, my, Number(dis))) {
            continue;
        }
        
        [x, y] = [nx, ny];
    }
    
    
    return [x, y];
}