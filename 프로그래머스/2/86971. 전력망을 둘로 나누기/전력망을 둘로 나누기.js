function solution(n, wires) {
    let mn = 100;
    
    // 그래프
    const graph = Array(n+1).fill().map(_ => []);
    
    for (let wire of wires) {
        const [a, b] = wire;
        graph[a].push(b);
        graph[b].push(a);
    }
    
    
    // 전력망 송전탑 개수 반환
    function dfs(cur, visited) {
        visited[cur] = true;
        let count = 1;
        
        for (let nxt of graph[cur]) {
            if (!visited[nxt]) {
                count += dfs(nxt, visited);
            }
        }
        
        return count;
    }
    
    
    // wires 배열 돌면서 전선 끊으며 최소값 찾기
    for (let wire of wires) {
        const [a, b] = wire;
        
        // 전선 끊기
        graph[a] = graph[a].filter(v => v !== b);
        graph[b] = graph[b].filter(v => v !== a);
        
        const visited = Array(n+1).fill(false);
        const cnt1 = dfs(a, visited);
        const cnt2 = n - cnt1;
        
        mn = Math.min(mn, Math.abs(cnt1 - cnt2));
        
        // 복구
        graph[a].push(b);
        graph[b].push(a);
    }
    
    
    return mn;
}