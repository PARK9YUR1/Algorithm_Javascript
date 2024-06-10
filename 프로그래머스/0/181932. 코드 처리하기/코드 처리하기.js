function solution(code) {
    let ret = "";
    
    let mode = false;
    function setMode() {
        mode = !mode;
    }
    
    for (let i=0; i<code.length; i++) {
        if (code[i] === "1") {
            setMode();
            continue;
        }
        
        if ((!mode && !(i%2)) || (mode && i%2)) {
            ret += code[i];
        }
    }
    
    return ret || "EMPTY";
}