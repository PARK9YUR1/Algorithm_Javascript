function solution(sides) {
    sides.sort((a, b) => b - a);
    const [l, s1, s2] = sides;
    
    return (l<s1+s2) ? 1 : 2;
}