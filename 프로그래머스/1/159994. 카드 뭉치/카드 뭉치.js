function solution(cards1, cards2, goal) {
    let [i1, i2] = [-1, -1];
    
    for (word of goal) {
        if (cards1.includes(word)) {
            if (cards1[++i1] !== word) {
                return "No";
            }
        } else if (cards2.includes(word)) {
            if (cards2[++i2] !== word) {
                return "No";
            }
        } else {
            return "No";
        }
    }
    
    return "Yes";
}