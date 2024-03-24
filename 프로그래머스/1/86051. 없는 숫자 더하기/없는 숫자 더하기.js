function solution(numbers) {
    var answer = 9*10/2;
    numbers.forEach(num => {
        answer -= num;
    })
    return answer;
}