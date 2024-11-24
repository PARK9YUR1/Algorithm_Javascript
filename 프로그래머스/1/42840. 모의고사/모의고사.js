function solution(answers) {
    const answer = [];
    const result = [];
    
    const len = answers.length;
    const supojas = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    
    supojas.forEach((supoja) => {
        const spj = Array(Math.ceil(len/supoja.length)).fill(supoja).flat();
        result.push(answers.filter((answer, i) => answer === spj[i]).length);
    })
    
    const mx = Math.max(...result);
    result.forEach((res, i) => {
        if (res === mx) answer.push(i+1);
    });
    
    return answer;
}