function solution(progresses, speeds) {
    let answer = [];
    let len = progresses.length;
    
    while (len) {
        let lastIndex = -1;  // 진도 100%인 최종 기능의 index
        
        for (let i=0; i<len; i++) {
            // 현재 기능 진도 100% 미만
            if (progresses[i] < 100) {
                progresses[i] += speeds[i];
            }
            
            // 이전 기능 작업완료 & 현재 기능 진도 100% 이상
            if (lastIndex === i - 1 && progresses[i] >= 100) {
                lastIndex++;
            }
        }
        
        if (lastIndex > -1) {
            progresses = progresses.slice(lastIndex+1);
            speeds = speeds.slice(lastIndex+1);
            len = progresses.length;
            answer.push(lastIndex+1);
        }
    }
    
    return answer;
}