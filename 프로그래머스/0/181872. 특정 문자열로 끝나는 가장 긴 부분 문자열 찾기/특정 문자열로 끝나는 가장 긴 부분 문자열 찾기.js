function solution(myString, pat) {
    const idx = myString.lastIndexOf(pat);
    const len = pat.length;
    
    return myString.slice(0, idx+len);
}