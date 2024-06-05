function solution(chicken) {
    let answer = 0;
    
    while (true) {
        chicken -= 10;
        if (chicken >= 0) {
            answer++;
            chicken++;
        } else {
            break;
        }
    }
    
    return answer;
}