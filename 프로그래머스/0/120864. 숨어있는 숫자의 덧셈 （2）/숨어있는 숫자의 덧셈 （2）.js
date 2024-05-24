function solution(my_string) {
    var answer = 0;
    my_string.split("").map(str => !isNaN(str) ? str : " ").join("").split(" ").map(num => answer += +num);
    
    return answer;
}