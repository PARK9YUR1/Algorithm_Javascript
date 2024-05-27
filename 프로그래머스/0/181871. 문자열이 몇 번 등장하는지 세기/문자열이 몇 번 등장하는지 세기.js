function solution(myString, pat) {
    const [strLen, patLen] = [myString.length, pat.length];
    let cnt = 0;
    
    for (let i=0; i<=strLen - patLen; i++) {
        if (myString.slice(i, i+patLen) === pat) {
            cnt++;
        }
    }
    
    return cnt;
}