function solution(id_pw, db) {
    const [id, pw] = id_pw;
    
    const idCorrect = db.filter(([dbId, dbPw]) => dbId === id);
    const pwCorrect = idCorrect.filter(([dbId, dbPw]) => dbPw === pw);
    
    return idCorrect.length ? pwCorrect.length ? "login" : "wrong pw" : "fail";
}