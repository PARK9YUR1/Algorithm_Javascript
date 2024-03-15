function solution(n) {
    var answer = 0;
    let nums;
    
    if (n%2) {  // 홀수
        nums = Array.from({ length: n/2+1 }, (_, i) => 1 + i*2);
    } else {  // 짝수
        nums = Array.from({ length: n/2 }, (_, i) => ((i+1)*2)**2);
    }
    
    nums.forEach(num => {
        answer += num;
    })

    return answer;
}