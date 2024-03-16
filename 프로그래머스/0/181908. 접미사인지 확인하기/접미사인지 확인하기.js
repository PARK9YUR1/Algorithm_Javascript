function solution(my_string, is_suffix) {
    const mylen = my_string.length;
    const suflen = is_suffix.length;
    
    const bool = my_string.slice(mylen-suflen, mylen) === is_suffix;
    
    var answer = bool ? 1 : 0;
    return answer;
}