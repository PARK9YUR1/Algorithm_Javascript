function solution(n, lost, reserve) {
    const arr = lost.filter(l => reserve.includes(l));
    lost = lost.filter(l => !arr.includes(l)).sort((a, b) => a - b);
    reserve = Array(n+2).fill().map((_, i) => reserve.includes(i) && !arr.includes(i) ? 1 : 0);
    
    let answer = n - lost.length;
    
    for (i of lost) {
        if (reserve[i-1]) {
            reserve[i-1] = 0;
            answer++;
        } else if (reserve[i+1]) {
            reserve[i+1] = 0;
            answer++;
        }
    }
    
    return answer;
}