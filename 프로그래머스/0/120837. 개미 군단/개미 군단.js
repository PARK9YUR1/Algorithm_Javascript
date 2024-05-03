function solution(hp) {
    let answer = 0;
    const powers = [5, 3, 1];
    
    for (power of powers) {
        if (hp >= power) {
            answer += ~~(hp/power);
            hp %= power;
        }
    }
    
    return answer;
}