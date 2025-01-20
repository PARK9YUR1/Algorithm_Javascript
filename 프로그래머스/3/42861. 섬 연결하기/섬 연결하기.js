function solution(n, costs) {
    // Prim 알고리즘
    costs.sort((a, b) => a[2] - b[2]);  // 비용 오름차순 정렬
    
    let answer = 0;
    const connect = new Set([costs[0][0]]);  // 연결된 노드
    
    while (connect.size < n) {
        for (let [u, v, cost] of costs) {
            // u v 모두 연결 되어있는 경우
            if (connect.has(u) && connect.has(v)) continue;  // 사이클 방지
            
            // u v 중 하나만 연결 되어있는 경우
            if (connect.has(u) || connect.has(v)) {
                connect.add(u);  // 간선 추가
                connect.add(v);
                answer += cost;  // 비용 추가
                break;
            }
        }
    }
    
    return answer;
}