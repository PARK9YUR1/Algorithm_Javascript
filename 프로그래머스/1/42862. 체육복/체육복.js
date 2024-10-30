function solution(n, lost, reserve) {  // 학생수, 도난당한 학생번호, 여벌체육복 학생번호
    let answer = n;
    const lostAndReserve = reserve.filter(r => lost.includes(r));  // 도난도 당하고 여벌체육복도 있는 학생번호
    lost = lost.filter(l => !lostAndReserve.includes(l)).sort((a, b) => a - b);
    reserve = reserve.filter(r => !lostAndReserve.includes(r) && ((r > 1 && lost.includes(r-1)) || (r < n && lost.includes(r+1))))
                     .sort((a, b) => a - b);
    answer -= lost.length;
    lost.forEach((num) => {
    const idx1 = reserve.indexOf(num-1);
    const idx2 = reserve.indexOf(num+1);

    if (num === 1 && idx2 > -1) {
        answer++;
        reserve = reserve.slice(idx2+1);
    } else if (num === n && idx1 > -1) {
        answer++;
    } else {
        if (idx1 > -1) {
            answer++;
            reserve = reserve.slice(idx1+1);
        } else if (idx2 > -1) {
            answer++;
            reserve = reserve.slice(idx2+1);
        }
    }
    })

    return answer;
}