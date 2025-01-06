function solution(priorities, location) {
    let sources = priorities.map((v, i) => [i, v]);
    let mx = Math.max(...priorities);
    let order = 1;
    
    while (true) {
        const [index, priority] = sources.shift();
        
        if (priority < mx) {
            sources.push([index, priority]);
        } else {
            if (index === location) {
                break;
            }
            mx = Math.max(...sources.map(source => source[1]));
            order++;
        } 
    }
    
    return order;
}