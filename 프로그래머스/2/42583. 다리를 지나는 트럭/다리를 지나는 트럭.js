function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    
    const N = truck_weights.length;
    let success = 0;  // 다리를 지난 트럭 수
    let totalWeight = 0;
    
    const bridge = Array(bridge_length).fill(0);
    
    while (success < N) {
        const firstTruckWeight = bridge.shift();
        totalWeight -= firstTruckWeight;
        
        if (firstTruckWeight) success++;
        
        if (truck_weights.length > 0 && totalWeight + truck_weights[0] <= weight) {
            const nextTruckWeight = truck_weights.shift();
            bridge.push(nextTruckWeight);
            totalWeight += nextTruckWeight;
        } else {
            bridge.push(0);
        }
        
        time++;
    }
    
    return time;
}