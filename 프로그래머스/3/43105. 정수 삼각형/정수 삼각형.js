function solution(triangle) {
    const N = triangle.length;
    
    for (let i=1; i<N; i++) {
        const M = triangle[i].length;
        for (let j=0; j<M; j++) {
            if (j === 0) {
                triangle[i][j] = triangle[i-1][j] + triangle[i][j];
            } else if (j === M - 1) {
                triangle[i][j] = triangle[i-1][j-1] + triangle[i][j];
            } else {
                triangle[i][j] = Math.max(triangle[i-1][j] + triangle[i][j], triangle[i-1][j-1] + triangle[i][j]);
            }
        }
    }
    
    return Math.max(...triangle[N-1]);
}