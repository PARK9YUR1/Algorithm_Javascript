function solution(number) {
    const N = number.length;
    let cnt = 0;
    
    for (let i=0; i<N-2; i++) {
        for (let j=i+1; j<N-1; j++) {
            for (let k=j+1; k<N; k++) {
                const [a, b, c] = [number[i], number[j], number[k]];
                if (a+b+c === 0) {
                    cnt++;
                }
            }
        }
    }
    
    return cnt;
}