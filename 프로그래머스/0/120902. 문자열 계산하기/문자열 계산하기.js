function solution(my_string) {
    let answer = 0;
    let oper = 1;
    const calc = my_string.split(" ");
    
    
    for (c of calc) {
        if (c === "+" || c === "-") {
            oper = (c === "+") ? 1 : -1;
        } else {
            answer += oper * parseInt(c);
        }
    }
    
    return answer;
}