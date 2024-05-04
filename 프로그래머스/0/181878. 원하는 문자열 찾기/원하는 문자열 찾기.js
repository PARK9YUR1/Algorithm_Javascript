function solution(myString, pat) {
    const [myStr, myPat] = [myString.toLowerCase(), pat.toLowerCase()];
    return myStr.includes(myPat) ? 1 : 0;
}