function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    
    const N = truck_weights.length;
    let success = 0;  // 다리를 지난 트럭 수
    let totalWeight = 0;  // 다리 위 트럭 총 무게
    
    const bridge = Array(bridge_length).fill(0);  // 현재 다리 위의 상태
    
    while (success < N) {
        const firstTruckWeight = bridge.shift();  // 첫번째 트럭
        totalWeight -= firstTruckWeight;
        
        if (firstTruckWeight) success++;  // 첫번째 트럭이 있을때만 +1
        
        if (truck_weights.length > 0 && totalWeight + truck_weights[0] <= weight) {  // 대기 트럭이 있고, 무게를 견딜 수 있을 때
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