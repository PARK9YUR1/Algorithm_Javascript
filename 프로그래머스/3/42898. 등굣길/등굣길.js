function solution(m, n, puddles) {
    const N = 1000000007;
    
    let DP = Array(n).fill().map((_) => Array(m).fill(0));
    DP[0][0] = 1;
    
    for (const [x, y] of puddles) {
        DP[y-1][x-1] = -1;
    }
    
    for (let i=0; i<n; i++) {
        for (let j=0; j<m; j++) {
            if (DP[i][j] === -1) {
                DP[i][j] = 0;
            } else {
                if (i > 0) DP[i][j] += DP[i-1][j];
                if (j > 0) DP[i][j] += DP[i][j-1];
                DP[i][j] %= N;
            }
        }
    }
    
    return DP[n-1][m-1];
}