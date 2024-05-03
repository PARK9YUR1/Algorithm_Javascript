function solution(hp) {
    let answer = 0;
    
    const calc = (power) => {
        const troops = ~~(hp/power);
        hp %= power;
        answer += troops;
    }
    
    while (hp) {
        if (hp >= 5) {          // 장군개미
            calc(5);
        } else if (hp >= 3) {   // 병정개미
            calc(3);
        } else {                // 일개미
            calc(1);
        }
    }
    
    return answer;
}