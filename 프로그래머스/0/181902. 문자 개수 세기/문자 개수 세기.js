function solution(my_string) {
    // A-Z : (index)  0 - 25, (unicode) 65 -  90
    // a-z : (index) 26 - 51, (unicode) 97 - 122
    
    let alpha = Array(52).fill(0);
    
    for (str of my_string) {
        const ord = str.charCodeAt(0);
        const i = (ord>=65 && ord<=90) ? ord-65 : ord-71;
        alpha[i]++;
    }
    
    return alpha;
}