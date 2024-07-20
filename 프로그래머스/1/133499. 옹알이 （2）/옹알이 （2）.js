function solution(babbling) {
    const speaks = ["aya", "ye", "woo", "ma"];
    
    // 연속하는 문자열 찾기 ... ex: yeye
    const arr = babbling.map(babble => {
        for (speak of speaks) {
            const i = babble.indexOf(speak.repeat(2));
            if (i !== -1) {
                return false;
            }
        }
        
        // babble =  babble.split("aya").filter(b => b).join(" ")
        //                 .split("ye").filter(b => b).join(" ")
        //                 .split("woo").filter(b => b).join(" ")
        //                 .split("ma").filter(b => b).join("")
        //                 .split(" ").join("");
        
        babble =  babble.replaceAll("aya", " ")
                        .replaceAll("ye", " ")
                        .replaceAll("woo", " ")
                        .replaceAll("ma", " ")
                        .replaceAll(" ", "");
        
        
        return babble.length ? false : true;
    })
    
    return arr.filter(v => v).length;
}