function solution(people, limit) {
    people.sort((a, b) => a - b);
    
    let [l, r] = [0, people.length - 1];  // 가장 가벼운, 무거운 사람의 인덱스
    let count = 0;  // 필요한 구명보트 개수
    
    while (l <= r) {
        if (people[l] + people[r] <= limit) {
            l++;
        }
        
        r--;  // 가장 무거운 사람은 항상 보트에 탐
        count++;
    }
    
    return count;
}