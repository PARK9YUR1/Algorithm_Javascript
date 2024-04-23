function solution(my_string) {
    let answer = "";
    my_string.split('').forEach(str => {
        if (str.charCodeAt(0) >= 97) {
            answer += str.toUpperCase();
        } else {
            answer += str.toLowerCase();
        }
    })
    return answer;
}