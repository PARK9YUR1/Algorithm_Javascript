function solution(cards1, cards2, goal) {
    let [i1, i2] = [-1, -1];
    
    for (word of goal) {
        if ((cards1.includes(word) && cards1[++i1] !== word) 
            || (cards2.includes(word) && cards2[++i2] !== word)) {
            return "No";
        }
    }
    
    return "Yes";
}