function solution(id_list, report, k) {
    const N = id_list.length;
    let answer = Array(N).fill(0);
    
    const index = {};
    id_list.forEach((v, i) => index[v] = i)
    
    // 신고 기록 : [[], [], ...]
    // records[i] : i번째 유저를 신고한 유저들의 index를 담은 배열
    const records = Array(N).fill().map((_) => []);
    
    for (rpt of report) {
        // reporter가 user를 신고
        let [reporter, user] = rpt.split(" ");
        let [r, u] = [index[reporter], index[user]];
        
        if (!records[u].includes(r)) {
            records[u].push(r);
        }
    }
    
    records.forEach(record => {
        if (record.length >= k) {
            record.forEach(r => answer[r]++)
        }
    })
    
    return answer;
}