function solution(cards1, cards2, goal) {
    let [idx1, idx2] = [-1, -1];
    
    for (word of goal) {
        if (cards1.includes(word)) {
            const i = cards1.indexOf(word);
            if (idx1 !== i-1) { return "No"; }
            idx1 = i;
        } else if (cards2.includes(word)) {
            const i = cards2.indexOf(word);
            if (idx2 !== i-1) { return "No"; }
            idx2 = i;
        } else {
            return "No";
        }
    }
    
    return "Yes";
}