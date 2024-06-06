function solution(A, B) {
    const pushString = (i) => {
        const str = A.slice(i) + A.slice(0, i)
        return str;
    }
    
    for (let i=0; i<A.length; i++) {
        const str = pushString(A.length - i);
        if (str === B) {
            return i;
        }
    }
    
    return -1;
}