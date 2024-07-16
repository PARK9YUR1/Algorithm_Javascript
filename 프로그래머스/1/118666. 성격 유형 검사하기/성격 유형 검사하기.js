function solution(survey, choices) {
    const types = [
        ["R", "T"], 
        ["C", "F"], 
        ["J", "M"], 
        ["A", "N"]
    ];
    
    const test = {
        "R": 0, "T": 0,  
        "C": 0, "F": 0,  
        "J": 0, "M": 0,  
        "A": 0, "N": 0
    };
    
    const getScore = (c) => {
        switch (c) {
            case 1:
            case 7:
                return 3;
            case 2:
            case 6:
                return 2;
            case 3:
            case 5:
                return 1;
            default:
                return 0;
        }
    };
    
    for (let i=0; i<survey.length; i++) {
        const [disagree, agree] = survey[i].split("");
        const c = choices[i];
        const s = (c < 4) ? disagree : agree;
        
        test[s] += getScore(c);
    }
    
    
    return types.map(type => {
                    const [a, b] = type;
                    return (test[a] >= test[b]) ? a : b;
                })
                .join("");
}