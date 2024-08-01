function solution(n, words) {
    let used = [];
    let start = "";
    
    for (let i=0; i<words.length; i++) {
        const word = words[i];
        
        if (
            (i && start !== word[0]) || 
            used.includes(word) ||
            word.length === 1
        ) {
            return [i%n+1, parseInt((i+1)/n)+1];
        } else {
            used.push(word);
            start = word[word.length-1];
        }
        
    }

    return [0, 0];
}