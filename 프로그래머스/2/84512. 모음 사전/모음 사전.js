function solution(word) {
    const alpha = ["A", "E", "I", "O", "U"];
    const N = word.length;
    
    let answer = N;
    
    for (let i=0; i<N; i++) {
        const a = word[i];
        const idx = alpha.indexOf(a);
        
        let j = 5;
        
        while (j > i) {
            answer += idx * (5 ** (5 - j));
            j--;
        }
    }
    
    return answer;
    
}