function solution(n, results) {
    const graph = Array(n+1).fill().map(_ => Array(n+1).fill(0));
    
    results.forEach(res => {
        const [a, b] = res;
        graph[a][b] = 1;    // a가 b 이김
        graph[b][a] = -1;   // b가 a에 짐
    })
    
    for (let x=1; x<=n; x++) {
        for (let y=1; y<=n; y++) {
            for (let z=1; z<=n; z++) {
                // y가 x 이김 & x가 z 이김 => y가 z 이김
                if (graph[y][x] === 1 && graph[x][z] === 1) {
                    graph[y][z] = 1;
                }
                // y가 x에 짐 & x가 z에 짐 => y가 z에 짐
                if (graph[y][x] === -1 && graph[x][z] === -1) {
                    graph[y][z] = -1;
                }
            }
        }
    }
    
    let answer = 0;
    
    for (let x=1; x<=n; x++) {
        let cnt = 0;  // x가 y와의 승부 결과를 알 수 있으면 +1
        
        for (let y=1; y<=n; y++) {
            if (graph[x][y]) {
                cnt++;
            }
        }
        
        if (cnt === n-1) {
            answer++;
        }
    }

    return answer;
}
