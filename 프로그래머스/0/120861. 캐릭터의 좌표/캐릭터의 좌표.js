function solution(keyinput, board) {
    const [N, M] = [parseInt(board[0]/2), parseInt(board[1]/2)];
    
    const direction = {
        "left": [-1, 0], "right": [1, 0],
        "up": [0, 1], "down": [0, -1]
    }
    
    const game = (pos, dir) => {
        let [x, y] = pos;
        const [dx, dy] = direction[dir];
        const [nx, ny] = [x+dx, y+dy];
        
        if (nx < -N || nx > N || ny < -M || ny > M) {
            return [x, y];
        }
        return [nx, ny];
    }
    
    let position = [0, 0];
    for (key of keyinput) {
        position = game(position, key);
    }
    return position;
    
    // return keyinput.reduce(([x, y], key) => {
    //     [x, y] = game([x, y], key);
    //     return [x, y]
    // }, [0, 0])
}