function solution(score) {
    const avg = score.map(s => (s[0]+s[1])/2);
    const ranking = avg.slice().sort((a, b) => b-a);
    
    return avg.map(a => ranking.indexOf(a)+1);
}