function solution(my_string) {
    let answer = 0;
    
    for (str of my_string) {
        if (/^\d$/.test(str)) {
            answer += parseInt(str);
        }
    }
    
    return answer;
}