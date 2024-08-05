function solution(today, terms, privacies) {
    const D = 28;  // 한달 = 28일
    const [ty, tm, td] = today.split(".").map(t => Number(t));  // 오늘 년,월,일
    const TD = (ty * 12 * D) + (tm * D) + td;  // today
    
    
    // 유효기간
    const term = {};
    for (t of terms) {
        const [a, m] = t.split(" ");
        term[a] = Number(m) * D - 1;
    }
    
    // 개인정보 수집일자 - day
    const keeps = privacies.map(privacy => {
        let [collect, t] = privacy.split(" ");        
        t = term[t];  // 유효기간
        
        const [cy, cm, cd] = collect.split(".").map(c => Number(c));
        const c = (cy * 12 * D) + (cm * D) + cd;  // collect day
        
        return c + t;
    });
    
    return keeps.map((keep, i) => {
                    if (keep < TD) {
                        return i + 1;
                    }
                })
                .filter(k => k);
}