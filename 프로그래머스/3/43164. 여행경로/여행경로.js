function solution(tickets) {
    const graph = {};
    let stack = ["ICN"];
    let path = [];
    
    for (let [a, b] of tickets) {
        if (graph[a]) {
            graph[a].push(b);
        } else {
            graph[a] = [b];
        }
    }
    
    for (let key in graph) {
        graph[key].sort().reverse();
    }
    
    function peek(stack) {
        return stack[stack.length - 1];
    }
    
    while (stack.length) {
        // 현재 도시에서 갈 수 있는 도시가 있는 경우
        while (graph[peek(stack)]?.length) {
            const nxt = graph[peek(stack)].pop();
            stack.push(nxt);
        }
        
        path.push(stack.pop());
    }
    
    return path.reverse();
}