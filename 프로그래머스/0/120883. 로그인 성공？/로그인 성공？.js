function solution(id_pw, db) {
    const [ID, PW] = id_pw;

    const user = new Map(db);
    return user.has(ID) ? user.get(ID) === PW ? "login" : "wrong pw" : "fail";
    
    // const correctId = db.filter(([id, pw]) => ID === id);
    // const correctPw = correctId.filter(([id, pw]) => PW === pw);
    
    // return correctId.length ? correctPw.length ? "login" : "wrong pw" : "fail"; 
}