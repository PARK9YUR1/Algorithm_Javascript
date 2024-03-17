function solution(num) {
    var answer = 0;
    
    // const N = num.toString();
    // for (let i=0; i<N.length; i++) {
    //     answer += Number(N[i]);
    // }
    
    const len = num.toString().length;
    
    for (let i=0; i<len; i++) {
        answer += num%10;
        num = Math.floor(num/10);
    }

    return answer;
}