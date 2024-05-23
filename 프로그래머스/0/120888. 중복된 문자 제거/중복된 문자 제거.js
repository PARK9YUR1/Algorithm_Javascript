function solution(my_string) {
    let answer = "";

    for (str of my_string) {
        if (!answer.includes(str)) {
            answer += str;
        }
    }
    
    return answer;
}