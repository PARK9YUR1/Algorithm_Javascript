function solution(numer1, denom1, numer2, denom2) {
    const d1 = denom1;
    
    numer1 *= denom2;
    denom1 *= denom2;
    numer2 *= d1;
    denom2 *= d1;
    
    let [numer, denom] = [numer1+numer2, denom1];
    
    // 최대공약수
    let num = Math.min(numer, denom);
    while (num) {
        if (numer%num || denom%num) {
            num--;
        } else {
            break;
        }
    }
    
    [numer, denom] = [numer/num, denom/num];
    return [numer, denom]
}