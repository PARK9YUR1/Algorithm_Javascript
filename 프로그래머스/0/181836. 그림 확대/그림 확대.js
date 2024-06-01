function solution(picture, k) {
    // picture : "..xx"
    // pic : ".", ".", "x", "x"
    
    return picture.reduce((res, pic) => {
        const file = pic.split("").map(p => p.repeat(k)).join("");
        for (let i=0; i<k; i++) {
            res.push(file);
        }
        return res;
    }, []);
}