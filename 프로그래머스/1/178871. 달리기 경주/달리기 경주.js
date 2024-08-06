function solution(players, callings) {
    let player = {};  // { 0: "mumu" }
    let index = {};   // { "mumu": 0 }
    
    players.forEach((p, i) => {
        player[i] = p;
        index[p] = i;
    })
    
    for (c of callings) {
        let i = index[c];  // 내 순번
        let p = player[i-1];  // 내 앞 사람
        
        player[i-1] = c;
        player[i] = p;
        
        index[c] = i-1;
        index[p] = i;
    }
    
    return Object.entries(player).map(([k, v]) => v);
}