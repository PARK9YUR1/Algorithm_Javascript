function solution(participant, completion) {
    participant.sort();
    completion.sort();
    
    const N = participant.length;
    
    for (let i=0; i<N; i++) {
        const name = participant[i];
        if (i === N-1 || completion[i] !== name) {
            return name;
        }
    }
}