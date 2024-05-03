function solution(hp) {
    let answer = 0;
    
    const calc = (power) => {
        const troops = ~~(hp/power);
        hp %= power;
        answer += troops;
    }
    
    while (hp) {
        if      (hp >= 5) { calc(5) } 
        else if (hp >= 3) { calc(3) }
        else              { calc(1) }
    }
    
    return answer;
}