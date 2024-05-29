function solution(sides) {
    const a = sides.sort((a, b) => a - b)[0];
    
    // b가 최대 : b-a < c < b    ==> a-1
    // c가 최대 -> b <= c < a+b  ===> a
    
    return 2*a - 1;
    
    /*
    const [a, b] = sides.sort((a, b) => a - b);
    let res = 0;
    
    // b가 max -> b < a+c
    for (let c=1; c<b; c++) {
        if(b < a+c) res++
    }
    
    // c가 max -> c < a+b
    for (let c=b; c<a+b; c++) {
        res++;
    }
    
    return res;
    */
}