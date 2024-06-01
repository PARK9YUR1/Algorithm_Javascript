function solution(id_pw, db) {
    const [ID, PW] = id_pw;
    
    const correctId = db.filter(([id, pw]) => ID === id);
    const correctPw = correctId.filter(([id, pw]) => PW === pw);
    
    return correctId.length ? correctPw.length ? "login" : "wrong pw" : "fail"; 
}