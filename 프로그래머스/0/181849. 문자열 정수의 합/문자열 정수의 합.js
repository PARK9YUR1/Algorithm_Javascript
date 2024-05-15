function solution(num_str) {
    return num_str.split("")
                  .map(num => +num)
                  .reduce((acc, cur) => acc + cur);
}