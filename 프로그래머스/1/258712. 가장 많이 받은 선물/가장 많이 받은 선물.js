function solution(friends, gifts) {
    const N = friends.length;
    
    const index = {};
    friends.forEach((v, i) => index[v] = i)
    
    /*
        score   : 선물 지수
        record  : 선물 주고 받은 기록
        receive : 다음달 선물 받는 수
    */
    
    const score = Array(N).fill(0);
    const record = Array(N).fill().map((_, i) => Array(N).fill(0));
    const receive = Array(N).fill(0);
    
    gifts.forEach(gift => {
        // n, m : 주는, 받는 사람
        let [n, m] = gift.split(" ");
        n = index[n];
        m = index[m];
        
        record[n][m]++;
        score[n]++;
        score[m]--;
    })
    
    for (let i=0; i<N; i++) {
        for (let j=i+1; j<N; j++) {
            // ri, rj : i가 j에게, j가 i에게 준 선물 개수
            const [ri, rj] = [record[i][j], record[j][i]];
            
            if (ri > rj) {
                receive[i]++;
            } else if (ri < rj) {
                receive[j]++;
            } else {
                // si, sj : i, j의 선물지수
                const [si, sj] = [score[i], score[j]];
                if (si > sj) {
                    receive[i]++;
                } else if (si < sj) {
                    receive[j]++;
                }
            }
        }
    }
    
    return Math.max(...receive);
}