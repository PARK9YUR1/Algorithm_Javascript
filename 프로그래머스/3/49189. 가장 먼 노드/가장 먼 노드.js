function solution(n, edge) {
    const graph = Array(n+1).fill().map(() => []);
    let visited = Array(n+1).fill(0);
    
    const q = [1];
    visited[1] = 1;

    for (let e of edge) {
        const [x, y] = e;
        graph[x].push(y);
        graph[y].push(x);
    }

    while (q.length) {
        const u = q.shift();
        for (let v of graph[u]) {
            if (!visited[v]) {
                q.push(v)
                visited[v] = visited[u] + 1;
            }
        }
    }
    
    const mx = Math.max(...visited);
    return visited.filter((v) => (v === mx)).length;
}