function solution(begin, target, words) {
    let answer = 0;
    
    words.unshift(begin);
    
    const N = words.length;
    const W = begin.length;
    
    if (words.includes(target)) {
        const idx = words.indexOf(target);
        let graph = Array(N).fill().map(_ => []);
        
        for (let i=0; i<N; i++) {
            for (let j=0; j<N; j++) {
                if (i === j) continue;
                
                const arr = Array(W).fill().map((_, k) => words[i][k] !== words[j][k]);
                const total = arr.reduce((acc, cur) => acc + cur, 0);

                if (total === 1) {
                    graph[i].push(j);
                }
            }
        }
        
        function bfs(v) {
            let q = [v];
            let visited = Array(N).fill(0);
            visited[v] = 1;
            
            while (q.length) {
                const x = q.shift();
                
                if (x === idx) {
                    answer = visited[x] - 1;
                    return;
                }
                
                for (let u of graph[x]) {
                    if (!visited[u]) {
                        q.push(u);
                        visited[u] = visited[x] + 1;
                    }
                }
            }
        }
        
        bfs(0);
    }
    
    return answer;
}