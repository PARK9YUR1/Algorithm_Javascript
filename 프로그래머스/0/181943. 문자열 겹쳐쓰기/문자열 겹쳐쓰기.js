function solution(my_string, overwrite_string, s) {
    const mylen = my_string.length
    const overlen = overwrite_string.length

    const answer = my_string.slice(0, s) + overwrite_string + my_string.slice(s+overlen, mylen)
    return answer;
}