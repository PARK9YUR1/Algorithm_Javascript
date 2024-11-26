function solution(n, computers) {
    var answer = 0;
    let graphs = [];
    let visited = Array(n-1).fill(0);
    
    for (let i=0; i<n; i++) {
        let graph = [];
        for (let j=0; j<n; j++) {
            if (i === j) continue;
            if (computers[i][j]) {
                graph.push(j);
            }
        }
        graphs.push(graph);
    }
    
    function bfs(v) {
        let q = [v];
        visited[v] = 1;
        
        while (q.length) {
            const u = q.shift();
            for (let x of graphs[u]) {
                if (!visited[x]) {
                    q.push(x);
                    visited[x] = 1;
                }
            }
        }
    }
    
    for (let i=0; i<n; i++) {
        if (!visited[i]) {
            bfs(i);
            answer++;
        }
    }
    
    return answer;
}