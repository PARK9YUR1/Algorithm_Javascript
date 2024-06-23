function solution(answers) {
    let answer = [];
    const N = answers.length;
    
    const checkAnswer = (len, arr) => {
        return Array(parseInt(N/len)+1).fill().reduce((acc, cur) => [...acc, ...arr], []).filter((v, i) => v === answers[i]).length;
    };
    
    const su1 = checkAnswer(5, [1, 2, 3, 4, 5]);
    const su2 = checkAnswer(8, [2, 1, 2, 3, 2, 4, 2, 5]);
    const su3 = checkAnswer(10, [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]);
    
    const mx = Math.max(su1, su2, su3);
    
    if (mx === su1) { answer.push(1) };
    if (mx === su2) { answer.push(2) };
    if (mx === su3) { answer.push(3) };
    
    return answer;
}