function solution(num) {
    let hab = 0;
    num.toString().split("").forEach(n=>{
        hab += Number(n);
    })
    const answer = !(num%hab);
    return answer;
}