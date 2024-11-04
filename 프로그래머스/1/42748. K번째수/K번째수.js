function solution(array, commands) {
    let answer = [];
    
    function getNumber(i, j, k) {
        const arr = array.slice(i-1, j).sort((a, b) => (a - b));
        answer.push(arr[k-1]);
    }
    
    for (command of commands) {
        const [i, j, k] = command;
        getNumber(i, j, k);
    }
    
    return answer;
}