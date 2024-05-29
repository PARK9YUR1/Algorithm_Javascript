function solution(sides) {
    const [a, b] = sides.sort((a, b) => a - b);
    let res = 0;
    
    // b가 max -> b < a+c
    for (let c=1; c<b; c++) {
        if(b < a+c) res++
    }
    
    // c가 max -> c < a+b
    let c = b;
    while (c < a+b) {
        res++;
        c++;
    }
    
    return res;
}