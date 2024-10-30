function solution(n, lost, reserve) {  // 학생수, 도난, 여벌체육복
    let answer = n;
    const lostAndReserve = reserve.filter(r => lost.includes(r));  // 도난 & 여벌체육복
    reserve = Array(n+2).fill().map((_, i) => reserve.includes(i) && !lost.includes(i) ? 1 : 0);
    lost = lost.filter(l => !lostAndReserve.includes(l)).sort((a, b) => a - b);
    answer -= lost.length;
    
    lost.forEach(l => {
        if (reserve[l-1]) {
            answer++;
            reserve[l-1] = 0;
        } else if (reserve[l+1]) {
            answer++;
            reserve[l+1] = 0;
        }
    })
    
    return answer;
}
