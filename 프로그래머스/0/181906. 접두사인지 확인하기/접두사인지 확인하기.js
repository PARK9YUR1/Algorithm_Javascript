function solution(my_string, is_prefix) {
    const len = is_prefix.length; 
    return my_string.slice(0, len) === is_prefix ? 1 : 0;
}