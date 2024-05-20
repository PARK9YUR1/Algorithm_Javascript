function solution(arr) {
    const [N, M] = [arr.length, arr[0].length];
    
    for (let i=0; i<N; i++) {
        for (let j=0; j<M; j++) {
            if (arr[i][j] !== arr[j][i]) {
                return 0;
            }
        }
    }
    
    return 1;
}