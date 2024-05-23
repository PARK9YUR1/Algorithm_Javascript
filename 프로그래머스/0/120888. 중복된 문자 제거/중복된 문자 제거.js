function solution(my_string) {
    return Array.from(new Set(my_string)).join("");
    
    // let answer = "";
    // for (str of my_string) {
    //     if (!answer.includes(str)) {
    //         answer += str;
    //     }
    // }
    // return answer;
}