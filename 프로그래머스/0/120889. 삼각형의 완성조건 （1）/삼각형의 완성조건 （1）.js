function solution(sides) {
    sides.sort((a, b) => b - a);
    const [l, s1, s2] = sides;
    
    if (l < s1+s2) {
        return 1;
    } else {
        return 2;
    }
}