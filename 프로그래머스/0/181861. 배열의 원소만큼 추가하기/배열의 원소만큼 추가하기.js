function solution(arr) {
    var answer = [];
    
    for (a of arr) {
        let x = 0;
        while (x < a) {
            answer.push(a);
            x++;
        }
    }
    
    return answer;
    // return arr.reduce((nums, num) => [...nums, ...Array(num).fill(num)], [])
}