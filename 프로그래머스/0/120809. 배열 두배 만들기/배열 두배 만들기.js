function solution(numbers) {
    const answer = [];
    numbers.forEach(number => {
        answer.push(number * 2);
    })
    return answer;
}