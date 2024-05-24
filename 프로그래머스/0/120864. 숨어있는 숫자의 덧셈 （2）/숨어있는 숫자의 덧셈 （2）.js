function solution(my_string) {
    return my_string.split("")
                    .map(str => !isNaN(str) ? str : " ")
                    .join("")
                    .split(" ")
                    .reduce((sum, num) => sum + +num, 0);
}