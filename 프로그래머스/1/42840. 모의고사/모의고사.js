function solution(answers) {
    const answer = [];
    const result = [];
    
    const len = answers.length;
    const students = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    
    students.forEach((student, i) => {
        students[i] = Array(Math.ceil(len/student.length)).fill(student).flat();
        result.push(answers.filter((answer, idx) => answer === students[i][idx]).length);
    })
    
    const mx = Math.max(...result);
    result.forEach((res, i) => {
        if (res === mx) answer.push(i+1);
    });
    
    return answer;
}