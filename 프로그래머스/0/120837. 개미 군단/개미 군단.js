function solution(hp) {
    let answer = 0;
    const powers = [5, 3, 1];
    
    const calc = (power) => {
        const troops = ~~(hp/power);
        hp %= power;
        answer += troops;
    }
    
    for (power of powers) {
        if (hp >= power) {
            calc(power);
        }
    }
    
    return answer;
}