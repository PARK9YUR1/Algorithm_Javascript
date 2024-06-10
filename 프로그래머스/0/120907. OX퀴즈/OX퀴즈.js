function solution(quiz) {
    const isDigit = (s) => {
        return s.match(/[0-9]/g);
    }
    
    return quiz.map(qz => {
        const q = qz.split(" ").map(s => isDigit(s) ? parseInt(s) : s);
        let [ans, buho] = [0, 1];
        for (let i=0; i<q.length; i++) {
            const s = q[i];
            
            if (typeof s === "number") {
                ans += buho*s;
            } else if ("+-".includes(s)) {
                buho = s==="+" ? 1 : -1;
            } else {
                return ans===q[i+1] ? "O" : "X";
            }
        }
    });
}