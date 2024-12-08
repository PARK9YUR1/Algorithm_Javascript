function solution(citations) { 
    const len = citations.length;
    let answer = 0;
    
    for (let i=0; i<=len; i++) {
        // i번 이상 인용된 논문 개수
        const cnt = citations.filter(citation => citation >= i).length;        
        
        if (cnt >= i) {
            answer = i;
        }
    }
    
    return answer;
}