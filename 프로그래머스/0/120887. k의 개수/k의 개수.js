function solution(i, j, k) {
    let answer = 0;
    
    for (let n=i; n<=j; n++) {
        const len = n.toString().split("").filter(num => num == k).length;
        answer += len;
    }
    
    return answer;
}