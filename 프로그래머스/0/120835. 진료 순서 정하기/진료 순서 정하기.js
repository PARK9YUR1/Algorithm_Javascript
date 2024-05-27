function solution(emergency) {
    // const arr = emergency.slice().sort((a, b) => b - a);
    const arr = [...emergency].sort((a, b) => b - a);
    return emergency.map(e => arr.indexOf(e)+1);
}