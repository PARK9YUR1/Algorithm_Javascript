function solution(k, dungeons) {
    let mx = 0;
    let N = dungeons.length;
    let visited = Array(N).fill(false);
    
    function dfs(curK, visited, count) {
        mx = Math.max(mx, count);
        
        for (let i=0; i<N; i++) {
            const [require, consume] = dungeons[i];
            if (!visited[i] && curK >= require) {  // 방문 x & 최소필요피로도 이상
                visited[i] = true;
                dfs(curK - consume, visited, count+1);
                visited[i] = false;
            }
        }
    }
    
    dfs(k, visited, 0);
    
    return mx;
}